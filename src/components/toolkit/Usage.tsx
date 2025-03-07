import { Suspense } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils";
import MarkdownRenderer from "../MarkdownRenderer";

const Usage = () => {
  const markdown = `## Installation

\`\`\`bash
$ pip install opengenome
\`\`\`

## Usage

Test \`opengenome\` by trying the welcome function:

\`\`\`python
import opengenome as og
og.about()
\`\`\`

or

\`\`\`bash
$ opengenome-hello
\`\`\``;

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Usage</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <MarkdownRenderer markdown={markdown} />
      </motion.div>
    </>
  );
};

const LazyUsage = () => (
  <Suspense>
    <Usage />
  </Suspense>
);

export default SectionWrapper(LazyUsage, "usage");
