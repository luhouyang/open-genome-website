import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../../utils";
import { styles } from "../../styles";

const About = () => {
  return (
    <>
      <div className={`${styles.aboutPageTitle}`}>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} celeste`}>OG Database</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.aboutPageSubTitle}`}
        >
          Open-Genome Database contains public datasets of model explanations and analysis data obtained under the Open-Genome Project.
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
