import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils";

const MarkdownRenderer: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, language: string, index: number): void => {
    // Remove $ at the beginning of lines if it's a bash/shell code block
    let processedText = text;
    if (language === "bash" || language === "sh" || language === "shell") {
      processedText = text
        .split("\n")
        .map((line) => (line.startsWith("$ ") ? line.substring(2) : line))
        .join("\n");
    }

    navigator.clipboard.writeText(processedText);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

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

  let codeBlockIndex = 0;

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeHighlight]}
      components={{
        h2: ({ node, children, ...props }) => (
          <h2
            className="text-2xl font-bold mt-6 mb-4 text-celeste"
            {...props}
          >
            {children}
          </h2>
        ),
        p: ({ node, children, ...props }) => (
          <p
            className="my-4 text-drwhite leading-relaxed"
            {...props}
          >
            {children}
          </p>
        ),
        code: ({ node, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          const codeText = String(children).trim();

          if (match) {
            const language = match[1];
            const currentIndex = codeBlockIndex++;

            // Check if it's a bash code block to show special handling
            const hasDollarPrompt =
              (language === "bash" || language === "sh" || language === "shell" || language === "console") &&
              codeText.split("\n").some((line) => line.startsWith("$ "));

            return (
              <div className="my-5 rounded-md overflow-hidden border border-spring">
                <div className="bg-dark-blue text-spring text-xs px-4 py-1 flex justify-between items-center">
                  <div className="flex items-center">
                    <span>{language}</span>
                    {hasDollarPrompt && <span className="ml-2 text-xs text-canary">($ prompt will be excluded when copied)</span>}
                  </div>
                  <div className="flex items-center">
                    <span className="text-imperial mr-4">opengenome</span>
                    <button
                      onClick={() => handleCopy(codeText, language, currentIndex)}
                      className="p-1 rounded hover:bg-[#1a1a3a] transition-colors duration-200"
                      title="Copy code"
                    >
                      {copiedIndex === currentIndex ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-spring"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-drwhite"
                        >
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <code
                  className={`${className} block p-4 bg-[#121224] text-drwhite overflow-x-auto`}
                  {...props}
                >
                  {children}
                </code>
              </div>
            );
          } else {
            return (
              <code
                className="bg-[#12122a] text-canary px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            );
          }
        },
        ul: ({ node, children, ...props }) => (
          <ul
            className="list-disc pl-6 my-4 text-drwhite"
            {...props}
          >
            {children}
          </ul>
        ),
        li: ({ node, children, ...props }) => (
          <li
            className="mb-2 text-drwhite"
            {...props}
          >
            {children}
          </li>
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

const Usage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Usage</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <div className={`${styles.sectionDescDiv}`}>
          <MarkdownRenderer />
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Usage, "usage");
