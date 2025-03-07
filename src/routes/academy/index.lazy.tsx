import { createLazyFileRoute } from "@tanstack/react-router";

import { About, Articles } from "../../components/academy";
import Loading from "../../components/Loading";

export const Route = createLazyFileRoute("/academy/")({
  component: Academy,
  pendingComponent: Loading
});

function Academy() {
  return (
    <div className="relative z-0">
      {/* About.tsx | TITLE & DESCRIPTION */}
      <About />

      {/* Articles.tsx | ARTICLES */}
      <Articles />
    </div>
  );
}
