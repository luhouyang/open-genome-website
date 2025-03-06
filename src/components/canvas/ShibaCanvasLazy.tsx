import { Suspense, lazy } from "react";

// Lazy load the ComputerCanvas component
const LazyShibaCanvas = lazy(() => import("./Shiba"));

const ShibaCanvasLazy = () => (
  <Suspense>
    <LazyShibaCanvas />
  </Suspense>
);

export default ShibaCanvasLazy;
