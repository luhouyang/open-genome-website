import React, { Suspense, useState, useMemo, useRef, useEffect, forwardRef, RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";
import * as THREE from "three";
import { styles } from "../../styles";

type AttractorType = "lorenz" | "thomas" | "aizawa" | "dadras" | "halvorsen" | "rossler" | "fourWing";

type AttractorParams = {
  dt: number;
  scale: number;
  sigma?: number;
  rho?: number;
  beta?: number;
  b?: number;
  a?: number;
  c?: number;
  d?: number;
  e?: number;
  f?: number;
};

// Define color palette
const COLORS = {
  imperial: "#ed2929",
  celeste: "#b2ffff",
  darkCeleste: "#427799",
  spring: "#00ee7e",
  canary: "#ffff99",
};

// Custom line material props type
interface LineMatProps {
  color: string | THREE.Color;
  linewidth: number;
  transparent: boolean;
  opacity: number;
  vertexColors: boolean;
  depthWrite: boolean;
  blending: THREE.Blending;
}

// Custom LineBasicMaterial component
const LineMaterial: React.FC<LineMatProps> = (props) => {
  const { color, linewidth, transparent, opacity, vertexColors, depthWrite, blending } = props;

  const material = new THREE.LineBasicMaterial({
    color,
    linewidth,
    transparent,
    opacity,
    vertexColors,
    depthWrite,
    blending,
  });

  return <primitive object={material} />;
};

// Props for AttractorTrajectories
interface AttractorTrajectoriesProps {
  type: AttractorType;
  divergence: number;
  numTrajectories: number;
  pointsPerTrajectory: number;
  trailFadeLength?: number;
}

// Attractor trajectories component with forwarded ref
const AttractorTrajectories = forwardRef<THREE.Group, AttractorTrajectoriesProps>(
  (
    {
      type = "lorenz",
      divergence = 0.005,
      numTrajectories = 16,
      pointsPerTrajectory = 3000,
      trailFadeLength = 1000, // How many points in the fading trail
    }: AttractorTrajectoriesProps,
    ref
  ) => {
    // Create group ref if not provided
    const groupRef = useRef<THREE.Group>(null);

    // Use the forwarded ref or the local ref
    const finalRef = (ref || groupRef) as RefObject<THREE.Group>;

    // Create properly typed refs for all trajectories
    const mainTrajectoryRefs = useRef<(THREE.BufferGeometry | null)[]>([]);
    const fadeTrailRefs = useRef<(THREE.BufferGeometry | null)[]>([]);

    // Initialize trajectory structure with different starting points
    const [trajectories, setTrajectories] = useState<THREE.Vector3[][]>(() => {
      return Array.from({ length: numTrajectories }, (_, trajectoryIndex) => {
        // Create more diverse starting points for each trajectory
        const radius = 0.2 + Math.random() * 0.3;
        const angle = (trajectoryIndex * Math.PI * 2) / numTrajectories + Math.random() * 0.5;
        const height = -0.5 + Math.random();

        const initialPoint = new THREE.Vector3(radius * Math.cos(angle), radius * Math.sin(angle), height);

        // Start with just one point - we'll add more as the simulation runs
        return [initialPoint];
      });
    });

    // Store historical points for fading trails
    const [trailHistories, setTrailHistories] = useState<THREE.Vector3[][]>(() => {
      return Array.from({ length: numTrajectories }, () => []);
    });

    // Track number of points for each trajectory
    const currentLengthsRef = useRef<number[]>(Array(numTrajectories).fill(1));
    const frameCountRef = useRef(0);

    // Update parameters based on attractor type
    // https://www.dynamicmath.xyz/strange-attractors/
    const params = useMemo<AttractorParams>(() => {
      switch (type) {
        case "lorenz":
          return { dt: 0.003, scale: 0.1, sigma: 10, rho: 28, beta: 8 / 3 };
        case "thomas":
          return { dt: 0.01, scale: 0.8, b: 0.208186 };
        case "aizawa":
          return { dt: 0.01, scale: 1.2, a: 0.95, b: 0.7, c: 0.6, d: 3.5, e: 0.25, f: 0.1 };
        case "dadras":
          return { dt: 0.003, scale: 0.3, a: 3, b: 2.7, c: 1.7, d: 2, e: 9 };
        case "halvorsen":
          return { dt: 0.003, scale: 0.3, a: 1.89 };
        case "rossler":
          return { dt: 0.01, scale: 0.25, a: 0.2, b: 0.2, c: 5.7 };
        case "fourWing":
          return { dt: 0.01, scale: 2, a: 0.2, b: 0.01, c: -0.4 };
        default:
          return { dt: 0.003, scale: 0.1 };
      }
    }, [type]);

    // Reset when attractor type changes
    useEffect(() => {
      // Generate new diverse starting points
      const newTrajectories = Array.from({ length: numTrajectories }, (_, trajectoryIndex) => {
        const radius = 0.2 + Math.random() * 0.3;
        const angle = (trajectoryIndex * Math.PI * 2) / numTrajectories + Math.random() * 0.5;
        const height = -0.5 + Math.random();

        const initialPoint = new THREE.Vector3(radius * Math.cos(angle), radius * Math.sin(angle), height);

        // Start with just one point
        return [initialPoint];
      });

      setTrajectories(newTrajectories);
      setTrailHistories(Array.from({ length: numTrajectories }, () => []));

      // Reset lengths
      currentLengthsRef.current = Array(numTrajectories).fill(1);
      frameCountRef.current = 0;
    }, [type, numTrajectories]);

    // Ensure trajectory refs are updated when number changes
    useEffect(() => {
      mainTrajectoryRefs.current = Array(numTrajectories).fill(null);
      fadeTrailRefs.current = Array(numTrajectories).fill(null);
    }, [numTrajectories]);

    // Helper function to calculate the next point based on attractor type
    const calculateNextPoint = (point: THREE.Vector3, type: AttractorType, params: AttractorParams): THREE.Vector3 => {
      const { x, y, z } = point;
      let dx = 0,
        dy = 0,
        dz = 0;

      switch (type) {
        case "lorenz":
          dx = params.sigma! * (y - x);
          dy = x * (params.rho! - z) - y;
          dz = x * y - params.beta! * z;
          break;

        case "thomas":
          dx = Math.sin(y) - params.b! * x;
          dy = Math.sin(z) - params.b! * y;
          dz = Math.sin(x) - params.b! * z;
          break;

        case "aizawa":
          dx = (z - params.b!) * x - params.d! * y;
          dy = params.d! * x + (z - params.b!) * y;
          dz = params.c! + params.a! * z - z ** 3 / 3 - (x ** 2 + y ** 2) * (1 + params.e! * z) + params.f! * z * x ** 3;
          break;

        case "dadras":
          dx = y - params.a! * x + params.b! * y * z;
          dy = params.c! * y - x * z + z;
          dz = params.d! * x * y - params.e! * z;
          break;

        case "halvorsen":
          dx = -params.a! * x - 4 * y - 4 * z - y ** 2;
          dy = -params.a! * y - 4 * z - 4 * x - z ** 2;
          dz = -params.a! * z - 4 * x - 4 * y - x ** 2;
          break;

        case "rossler":
          dx = -y - z;
          dy = x + params.a! * y;
          dz = params.b! + z * (x - params.c!);
          break;

        case "fourWing":
          dx = params.a! * (y - x) + y * z;
          dy = params.b! * x + params.c! * y - x * z;
          dz = -z - x * y;
          break;
      }

      return new THREE.Vector3(x + dx * params.dt, y + dy * params.dt, z + dz * params.dt);
    };

    useFrame(() => {
      // Control simulation speed
      frameCountRef.current++;
      if (frameCountRef.current % 1 !== 0) return;

      // Update each trajectory
      const newTrajectories = [...trajectories];
      const newTrailHistories = [...trailHistories];

      for (let t = 0; t < numTrajectories; t++) {
        if (!mainTrajectoryRefs.current[t]) continue;

        const currentTrajectory = newTrajectories[t];
        const currentLength = currentLengthsRef.current[t];
        const trailHistory = newTrailHistories[t];

        // Get the latest point
        const currentPoint = currentTrajectory[currentLength - 1].clone();

        // Get the next point using the attractor equation
        let nextPoint = calculateNextPoint(currentPoint, type, params);

        // Apply a tiny unique divergence to each trajectory to make them more distinct
        nextPoint.x += Math.sin(t * 0.5) * 0.005;
        nextPoint.y += Math.cos(t * 0.5) * 0.005;
        nextPoint.z += Math.sin(t * 0.3 + 0.4) * 0.005;

        // Apply a very small random divergence if requested
        if (divergence > 0) {
          if (Math.random() < 0.75) nextPoint.x += (Math.random() - 0.5) * divergence;
          if (Math.random() < 0.75) nextPoint.y += (Math.random() - 0.5) * divergence;
          if (Math.random() < 0.75) nextPoint.z += (Math.random() - 0.5) * divergence;
        }

        // Add the next point to the trajectory
        if (currentLength < pointsPerTrajectory) {
          // Still building up to maximum length
          currentTrajectory.push(nextPoint);
          currentLengthsRef.current[t]++;
        } else {
          // At maximum length, track the point that's being removed for the trail
          const removedPoint = currentTrajectory[0].clone();
          trailHistory.push(removedPoint);

          // Limit trail history size
          if (trailHistory.length > trailFadeLength) {
            trailHistory.shift();
          }

          // Shift and add to main trajectory
          currentTrajectory.shift();
          currentTrajectory.push(nextPoint);
        }

        // Update the main trajectory geometry
        const mainGeometry = mainTrajectoryRefs.current[t];
        if (mainGeometry) {
          const positions = new Float32Array(
            currentTrajectory.flatMap((p) => [p.x * params.scale, p.y * params.scale, p.z * params.scale])
          );

          mainGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
          mainGeometry.attributes.position.needsUpdate = true;
        }

        // Update the trail geometry
        const trailGeometry = fadeTrailRefs.current[t];
        if (trailGeometry && trailHistory.length > 0) {
          const positions = new Float32Array(
            trailHistory.flatMap((p) => [p.x * params.scale, p.y * params.scale, p.z * params.scale])
          );

          trailGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

          // Create color attributes for fading effect
          const colors = new Float32Array(trailHistory.length * 3);
          for (let i = 0; i < trailHistory.length; i++) {
            // Calculate alpha based on position in history (newer = more opaque)
            const alpha = (i / trailHistory.length) * 1.5;
            // Set RGB values (all channels, creating a white to transparent fade)
            colors[i * 3] = alpha; // R
            colors[i * 3 + 1] = alpha; // G
            colors[i * 3 + 2] = alpha; // B
          }

          trailGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
          trailGeometry.attributes.position.needsUpdate = true;
          trailGeometry.attributes.color.needsUpdate = true;
        }
      }

      setTrajectories(newTrajectories);
      setTrailHistories(newTrailHistories);
    });

    // Map color names to array for easy access
    const colorArray = [COLORS.imperial, COLORS.celeste, COLORS.darkCeleste, COLORS.spring, COLORS.canary];

    // Component for main trajectory line
    const MainTrajectoryLine: React.FC<{ index: number }> = ({ index }) => {
      const setRef = (geometry: THREE.BufferGeometry) => {
        mainTrajectoryRefs.current[index] = geometry;
      };

      return (
        <line>
          <bufferGeometry ref={setRef}>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(trajectories[index].length * 3), 3]}
              count={trajectories[index].length}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={colorArray[index % colorArray.length]}
            linewidth={1}
          />
        </line>
      );
    };

    // Component for fading trail
    const FadeTrailLine: React.FC<{ index: number }> = ({ index }) => {
      const setRef = (geometry: THREE.BufferGeometry) => {
        fadeTrailRefs.current[index] = geometry;
      };

      const trailColor = colorArray[index % colorArray.length];

      return (
        <line>
          <bufferGeometry ref={setRef}>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(trailHistories[index].length * 3), 3]}
              count={trailHistories[index].length}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-color"
              args={[new Float32Array(trailHistories[index].length * 3), 3]}
              count={trailHistories[index].length}
              itemSize={3}
            />
          </bufferGeometry>
          <LineMaterial
            color={trailColor}
            linewidth={1}
            transparent={true}
            opacity={0.2}
            vertexColors={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </line>
      );
    };

    return (
      <group ref={finalRef}>
        {/* Main trajectories */}
        {trajectories.map((_, index) => (
          <MainTrajectoryLine
            key={`main-${index}`}
            index={index}
          />
        ))}

        {/* Fading trails */}
        {trajectories.map((_, index) => (
          <FadeTrailLine
            key={`trail-${index}`}
            index={index}
          />
        ))}
      </group>
    );
  }
);

// Add display name for forwardRef component
AttractorTrajectories.displayName = "AttractorTrajectories";

// Define props interface for AttractorScene component
interface AttractorSceneProps {
  type: AttractorType;
  divergence: number;
  numTrajectories: number;
  pointsPerTrajectory: number;
  trailFadeLength: number;
  showTransformControls: boolean;
}

// Modified AttractorScene component that won't reset animations when toggling controls
const AttractorScene: React.FC<AttractorSceneProps> = ({
  type,
  divergence,
  numTrajectories,
  pointsPerTrajectory,
  trailFadeLength,
  showTransformControls,
}) => {
  // Create a persistent reference to the AttractorTrajectories component
  const attractorRef = useRef<THREE.Group>(null);

  return (
    <>
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={10}
        maxDistance={500}
      />

      {/* Always render the AttractorTrajectories with a consistent ref */}
      <AttractorTrajectories
        ref={attractorRef}
        type={type}
        divergence={divergence}
        numTrajectories={numTrajectories}
        pointsPerTrajectory={pointsPerTrajectory}
        trailFadeLength={trailFadeLength}
      />

      {/* Conditionally render the TransformControls as a wrapper */}
      {showTransformControls && attractorRef.current ? (
        <TransformControls
          object={attractorRef.current}
          mode="translate"
        />
      ) : (
        showTransformControls && attractorRef.current == null && <TransformControls mode="translate" />
      )}
    </>
  );
};

const Hero: React.FC = () => {
  const [divergence, setDivergence] = useState(0.003);
  const [attractor, setAttractor] = useState<AttractorType>("lorenz");
  const [numTrajectories, setNumTrajectories] = useState(16);
  const [trailLength, setTrailLength] = useState(1000);
  const [showTransformControls, setShowTransformControls] = useState(true);
  const [showInstructions, setShowInstructions] = useState(true);

  // Function to toggle transform controls (doesn't reset animation)
  const toggleTransformControls = () => {
    setShowTransformControls(!showTransformControls);
  };

  // Function to dismiss instructions
  const dismissInstructions = () => {
    setShowInstructions(false);
  };

  // Custom slider styles with celeste color
  const sliderStyle = `
    .celeste-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 6px;
      background: rgba(178, 255, 255, 0.2);
      border-radius: 3px;
      outline: none;
    }
    .celeste-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      background: ${COLORS.celeste};
      border-radius: 50%;
      cursor: pointer;
    }
    .celeste-slider::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: ${COLORS.celeste};
      border-radius: 50%;
      cursor: pointer;
    }
  `;

  return (
    <section className="relative w-full xl:h-[97.5vh] sm:h-[85vh] h-[40vh]">
      {/* Inject custom slider styles */}
      <style>{sliderStyle}</style>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className={`${styles.paddingX} max-w-7xl mx-auto pt-16`}>
          <div className="flex items-start gap-4">
            <div>
              <p className={`${styles.heroSubText} text-secondary`}>Welcome to</p>
              <h1 className={`${styles.heroHeadText}`}>
                <span className="text-[var(--primary)]">Open-Genome Project</span>
              </h1>
              <p className={`${styles.heroDescText} text-secondary mt-4 max-w-2xl`}>
                An open-source genome database for all types of AI models.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0 bg-black">
        <Canvas camera={{ position: [0, 0, 100], fov: 5 }}>
          <ambientLight intensity={1} />
          <color
            attach="background"
            args={["#000000"]}
          />
          <Suspense fallback={null}>
            <AttractorScene
              type={attractor}
              divergence={divergence}
              numTrajectories={numTrajectories}
              pointsPerTrajectory={3000}
              trailFadeLength={trailLength}
              showTransformControls={showTransformControls}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="sm:block hidden">
        {/* Instructions Popup */}
        {showInstructions && (
          <div className="absolute bottom-8 right-8 z-20 bg-[var(--smoke)]/10 p-4 rounded-xl backdrop-blur-sm max-w-xs">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-secondary font-bold">Controls Guide</h3>
              <button
                onClick={dismissInstructions}
                className="text-secondary hover:text-imperial"
              >
                ✕
              </button>
            </div>
            <ul className="text-secondary text-sm space-y-2">
              <li>
                <span className="font-medium">Rotate:</span> Left-click + drag
              </li>
              <li>
                <span className="font-medium">Pan:</span> Right-click + drag
              </li>
              <li>
                <span className="font-medium">Zoom:</span> Scroll wheel
              </li>
              <li>
                <span className="font-medium">Move Object:</span> Hold{" "}
                <span className="bg-[var(--dark-celeste)]/45 px-1 rounded">Shift</span> + drag colored arrows
              </li>
            </ul>
          </div>
        )}

        {/* Interactive Controls */}
        <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-4">
          <div className="bg-[var(--smoke)]/10 p-4 rounded-xl backdrop-blur-sm">
            <select
              value={attractor}
              onChange={(e) => setAttractor(e.target.value as AttractorType)}
              className="bg-transparent text-secondary mb-4 block w-full border border-[var(--celeste)]/60 rounded px-2 py-1"
              style={{ color: COLORS.celeste }}
            >
              {["lorenz", "thomas", "aizawa", "dadras", "halvorsen", "rossler", "fourWing"].map((type) => (
                <option
                  key={type}
                  value={type}
                  className="bg-neutral-950"
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>

            <div className="items-center gap-4 mb-3">
              <span
                className="text-sm"
                style={{ color: COLORS.celeste }}
              >
                Chaos: {divergence.toFixed(3)}
              </span>
              <input
                type="range"
                min="0"
                max="0.7"
                step="0.001"
                value={divergence}
                onChange={(e) => setDivergence(Number(e.target.value))}
                className="w-32 celeste-slider"
              />
            </div>

            <div className="items-center gap-4 mb-3">
              <span
                className="text-sm"
                style={{ color: COLORS.celeste }}
              >
                Trajectories: {numTrajectories}
              </span>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={numTrajectories}
                onChange={(e) => setNumTrajectories(Number(e.target.value))}
                className="w-32 celeste-slider"
              />
            </div>

            <div className="items-center gap-4 mb-3">
              <span
                className="text-sm"
                style={{ color: COLORS.celeste }}
              >
                Trail Length: {trailLength}
              </span>
              <input
                type="range"
                min="100"
                max="3000"
                step="100"
                value={trailLength}
                onChange={(e) => setTrailLength(Number(e.target.value))}
                className="w-32 celeste-slider"
              />
            </div>

            {/* Toggle for Transform Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTransformControls}
                className={`px-3 py-1 rounded text-secondary text-sm ${
                  showTransformControls ? "bg-[var(--dark-celeste)]/30 text-secondary" : "bg-[var(--drwhite)]/30"
                }`}
              >
                {showTransformControls ? "Hide Transform Controls" : "Show Transform Controls"}
              </button>

              {/* Help button to show instructions again */}
              {!showInstructions && (
                <button
                  onClick={() => setShowInstructions(true)}
                  className="px-3 py-1 rounded text-secondary text-sm bg-[var(--dark-celeste)]/30"
                >
                  ?
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
