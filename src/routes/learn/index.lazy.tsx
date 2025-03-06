import { createLazyFileRoute } from "@tanstack/react-router";

import { About, Articles } from "../../components/learn";

export const Route = createLazyFileRoute("/learn/")({
  component: Learn,
});

function Learn() {
  return (
    <div className="relative z-0">
      {/* About.tsx | TITLE & DESCRIPTION */}
      <About />

      {/* Articles.tsx | ARTICLES */}
      <Articles />
    </div>
  );
}
