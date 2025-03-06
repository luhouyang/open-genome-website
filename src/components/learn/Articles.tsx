import { Link } from "@tanstack/react-router";

import { SectionWrapper } from "../../hoc";

const Articles = () => {
  const articles = ["alignment-problem", "computer vision", "toy models"];

  return (
    <div className="relative z-0">
      {articles.map((article) => (
        <div key={article}>
          <Link
            to="/learn/$aritcleId"
            params={{ aritcleId: article }}
          >
            {article}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Articles, 'articles');
