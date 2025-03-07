import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../../utils";
import { styles } from "../../styles";

const About = () => {
  return (
    <>
      <div className={`${styles.aboutPageTitle}`}>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} canary`}>Contribute &nbsp;\[&gt;.&lt;] /</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.aboutPageSubTitle}`}
        >
          We are looking for dedicated people that want to contribute to aligning AI with humanity's benefit.
        </motion.div>
      </div>
    </>
  );
};

export default About;
