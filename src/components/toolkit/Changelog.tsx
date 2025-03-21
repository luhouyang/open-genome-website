import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils";
import MarkdownRenderer from "../common/MarkdownRenderer";

const Changelog = () => {
  const markdown = `## v0.1.3 (07/03/2025)

  - Type safety with \`mypy\`
  `;

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Changelog</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <MarkdownRenderer markdown={markdown} />
      </motion.div>
    </>
  );
};

export default SectionWrapper(Changelog, "contact");
