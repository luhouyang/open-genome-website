import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../../utils";
import { styles } from "../../styles";

const About = () => {
  return (
    <>
      <div className={`${styles.aboutPageTitle} spring`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Open-Genome Toolkit</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.aboutPageSubTitle}`}
        >
          All-in-One AI model analysis toolkit and data preparation pipeline for the Open-Genome Project.
        </motion.div>

        <div className="flex flex-row w-[400px] justify-evenly mt-8">
          <a
            href="https://github.com/luhouyang/opengenome.git"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.celesteButton}`}
          >
            GitHub
          </a>
          <a
            href="https://opengenome.readthedocs.io/en/latest/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.springButton}`}
          >
            Docs
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
