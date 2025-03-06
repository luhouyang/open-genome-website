import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils";

const Usage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Usage</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <div className={`${styles.sectionDescDiv}`}>CODE</div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Usage, "usage");
