import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../../utils";
import { styles } from "../../styles";

const About = () => {
  return (
    <>
      <div className={`${styles.aboutPageTitle} celeste`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Open-Genome Database</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.aboutPageSubTitle}`}
        >
          Public datasets of model explanations and analysis data obtained under the Open-Genome Project.
        </motion.div>

        <a
          href="https://github.com/luhouyang/open-genome-project.git"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.celesteButton} mt-8`}
        >
          GitHub
        </a>
      </div>
    </>
  );
};

export default About;
