import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

const MarkdownRenderer: React.FC<{ markdown: string }> = ({ markdown }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Helper function to extract text content from React elements
  const extractTextContent = (children: React.ReactNode): string => {
    if (typeof children === "string") {
      return children;
    }

    if (Array.isArray(children)) {
      return children.map(extractTextContent).join("");
    }

    if (React.isValidElement<{ children?: React.ReactNode }>(children)) {
      return extractTextContent(children.props.children || "");
    }

    return String(children || "");
  };

  const handleCopy = (codeElement: React.ReactNode, language: string, index: number): void => {
    // Extract pure text content from the React elements
    const pureText = extractTextContent(codeElement);

    let processedText = pureText;
    if (["bash", "sh", "shell", "console"].includes(language)) {
      processedText = pureText
        .split("\n")
        .map((line) => (line.startsWith("$ ") ? line.substring(2) : line))
        .join("\n");
    }

    navigator.clipboard.writeText(processedText);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  let codeBlockIndex = 0;

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeHighlight]}
      components={{
        h2: ({ children, ...props }) => (
          <h2
            className="text-2xl font-bold mt-6 mb-4 text-celeste"
            {...props}
          >
            {children}
          </h2>
        ),
        p: ({ children, ...props }) => (
          <p
            className="my-4 text-drwhite leading-relaxed"
            {...props}
          >
            {children}
          </p>
        ),
        code: ({ className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");

          if (match) {
            const language = match[1];
            const currentIndex = codeBlockIndex++;

            return (
              <div className="my-4 rounded-md overflow-hidden border border-spring">
                <div className="bg-dark-blue text-spring text-xs px-4 py-1 flex justify-between items-center">
                  <span>{language}</span>
                  <button
                    onClick={() => handleCopy(children, language, currentIndex)}
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
                <code
                  className="block p-4 bg-[var(--dark-grey)] text-drwhite overflow-x-auto"
                  {...props}
                >
                  {children}
                </code>
              </div>
            );
          } else {
            return (
              <code
                className="bg-[var(--medium-grey)] text-canary px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            );
          }
        },
        ul: ({ children, ...props }) => (
          <ul
            className="list-disc pl-6 my-4 text-drwhite"
            {...props}
          >
            {children}
          </ul>
        ),
        li: ({ children, ...props }) => (
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

export default MarkdownRenderer;
