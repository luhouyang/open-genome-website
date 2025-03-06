import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { textVariant } from "../utils";

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Contact Us</h2>
      </motion.div>

      <div className="mt-8 flex flex-col">FORMS</div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
