import { motion } from "framer-motion";

import { textVariant } from "../../utils";
import { styles } from "../../styles";

const About = () => {
  return (
    <>
      <div className={`${styles.aboutPageTitle}`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Login</h2>
        </motion.div>
      </div>
    </>
  );
};

export default About;
