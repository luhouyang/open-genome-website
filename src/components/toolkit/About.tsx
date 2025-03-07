import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../../utils";
import { styles } from "../../styles";

const About = () => {
  return (
    <>
      <div className={`${styles.aboutPageTitle}`}>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} spring`}>OG Toolkit</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.aboutPageSubTitle}`}
        >
          Open-Genome Toolkit is an all-in-one AI model analysis toolkit and data preparation pipeline for the Open-Genome Project.
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-evenly items-center mt-8 px-4 gap-4">
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
