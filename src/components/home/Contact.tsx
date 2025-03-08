import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils";

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Contact Us</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <div className={`${styles.sectionDescDiv} bg-[var(--smoke)]/10 py-2 px-4 rounded-md backdrop-blur-sm`}>FORMS</div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
