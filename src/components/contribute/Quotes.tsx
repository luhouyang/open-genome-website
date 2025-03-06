import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils";

const Quotes = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Quotes</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <div className={`${styles.sectionDescDiv}`}>As wise men say . . .</div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Quotes, "quotes");
