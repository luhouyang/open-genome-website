import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils";

const Contributors = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Contributors</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <div className={`${styles.sectionDescDiv}`}>Get to know the team</div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contributors, "contributors");
