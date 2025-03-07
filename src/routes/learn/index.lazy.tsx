import { createLazyFileRoute } from "@tanstack/react-router";

import { About, Articles } from "../../components/learn";
import Loading from "../../components/Loading";

export const Route = createLazyFileRoute("/learn/")({
  component: Learn,
  pendingComponent: Loading
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
