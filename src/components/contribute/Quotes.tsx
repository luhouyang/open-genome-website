import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils";

const quotes = [
  {
    author: "Chat-GPT",
    text: "AI is a powerful tool, but its true potential lies in how responsibly we wield it. Safety isn't just an option—it's a necessity.",
  },
  {
    author: "Geoffrey Hinton",
    text: "We need to think hard about how we control AI systems that may become more intelligent than us. The risks are real, and we must address them responsibly.",
  },
  {
    author: "Stuart Russell",
    text: "If we succeed in building machines with intelligence greater than our own, they will have their own objectives. We need to ensure those objectives are aligned with ours.",
  },
];

const Quotes = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Quotes</h2>
      </motion.div>

      <div className="mt-8 gap-4 flex flex-row">
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            variants={fadeIn("", "", 0.2 * (index + 1), 1)}
            className="p-4 bg-dark-blue rounded-lg border border-spring flex-1/2"
          >
            <p className="text-grey-2 italic">“{quote.text}”</p>
            <p className="text-celeste font-bold mt-2">- {quote.author}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Quotes, "quotes");
