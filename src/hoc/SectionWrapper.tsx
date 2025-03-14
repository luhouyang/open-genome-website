import { motion } from "framer-motion";
import { ComponentType, Suspense } from "react";

import { styles } from "../styles";
import { staggerContainer } from "../utils";
import Loading from "../components/common/Loading";

const SectionWrapper = <P extends object>(Component: ComponentType<P>, idName: string) => {
  return (props: P) => (
    <Suspense fallback={<Loading />}>
      <motion.section
        variants={staggerContainer(0.2, 0.5)}
        initial="hidden"
        animate="show"
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        viewport={{ once: true, amount: 0.25 }}
        id={idName}
      >
        <span
          className="hash-span"
          id={idName}
        >
          &nbsp;
        </span>
        <Component {...props} />
      </motion.section>
    </Suspense>
  );
};

export default SectionWrapper;
