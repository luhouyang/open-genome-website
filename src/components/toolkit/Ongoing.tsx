import { motion } from "framer-motion";
import { Suspense, useState } from "react";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils";

const projects = [
  {
    group: "Open-Genome",
    title: "CNN Model explanation module",
    content: ["Feature map extraction", "Activation maximization", "Integrated gradients", "Saliency maps"],
    status: 15,
    difficulty: 2,
    contributeLink: "/contribute",
  },
  {
    group: "Open-Genome",
    title: "Unifying XAI data formats",
    content: ["Literature review on XAI techniques", "Identifying database details", "Creating OGP proposal"],
    status: 1,
    difficulty: 5,
    contributeLink: "/contribute",
  },
];

const Ongoing = () => {
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the state for the specific card
    }));
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Ongoing</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <div className={styles.sectionDescDiv}>We are looking for contributors &nbsp;\[&gt;.&lt;]/</div>
      </motion.div>

      <div className="mt-6 space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border border-spring rounded-lg p-4 bg-dark-blue"
            variants={fadeIn("up", "spring", index * 0.2, 1)}
          >
            <div className="flex sm:flex-row flex-col justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-celeste">{project.title}</h3>
                <p className="text-grey-2">Group: {project.group}</p>
                <p className="text-grey-2">Status: {project.status}%</p>
                <div className="flex items-center">
                  <span className="text-grey-2 mr-2">Difficulty:</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 mx-0.5 ${i < project.difficulty ? 'bg-[var(--imperial)]' : 'bg-[var(--medium-grey)]'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="z-20 px-4 py-2 bg-[var(--primary)] rounded-md text-neutral-950 font-bold hover:bg-[var(--dark-celeste)] hover:text-white"
                onClick={() => toggleExpand(index)}
              >
                {expandedCards[index] ? "Hide Details" : "Show Details"}
              </button>
            </div>

            {expandedCards[index] && (
              <div className="mt-4">
                <ul className="list-disc list-inside text-grey-2">
                  {project.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a
                  href={project.contributeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 text-[var(--primary)] hover:underline"
                >
                  Contribute here
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

const LazyOngoing = () => (
  <Suspense>
    <Ongoing />
  </Suspense>
)

export default SectionWrapper(LazyOngoing, "ongoing");