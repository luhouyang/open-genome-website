import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { herobg } from "../assets";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className={`${styles.paddingX} absolute inset-0 top-[60px] max-w-7xl mx-auto flex flex-row items-start gap-4`}>
        <div className="flex flex-col justify-center items-center">
          <div className="w-4 h-4 rounded-full bg-[#b2ffff]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>

        <div>
          <p className={`${styles.heroSubText}`}>Welcome to</p>
          <h1 className={`${styles.heroHeadText}`}>
            <span className="text-primary">Open-Genome Project</span>
          </h1>
          <p className={`${styles.heroDescText} mt-2`}>An open-source genome database for all types of AI models.</p>
        </div>
      </div>

      <ComputersCanvas />

      {/* <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center grey-1">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-1">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-4 h-4 rounded-full bg-grey-1 mb-1"
            />
          </div>
        </a>
      </div> */}

      <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="flex flex-col items-center"
          >
            <div className="w-4 h-6 bg-grey-1" />
            <div className="w-8 h-6 relative mt-[-1px]">
              <div
                className="absolute w-full h-full bg-grey-1 clip-path-triangle-down"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                }}
              ></div>
            </div>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
