import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../../utils";
import { styles } from "../../styles";

const About = () => {
  return (
    <>
      <div className={`${styles.aboutPageTitle}`}>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} imperial`}>OG Academy</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.aboutPageSubTitle}`}
        >
          Looking to sharpen your AI understanding & XAI techniques? Look no further than Open-Genome Academy.
        </motion.div>
      </div>
    </>
  );
};

export default About;
