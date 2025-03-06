import { createLazyFileRoute } from "@tanstack/react-router";

import { About, Usage, Ongoing, Changelog } from "../../components/toolkit";

export const Route = createLazyFileRoute("/toolkit/")({
  component: Toolkit,
});

function Toolkit() {
  return (
    <div className="relative z-0">
      {/* About.tsx | TITLE & DESCRIPTION & GitHub*/}
      <About />

      {/* Usage.tsx | POPULAR USAGES OF THE TOOL */}
      <Usage />

      {/* Ongoing.tsx | CURRENTLY DEVELOPING FEATURES REQUIRING TALENT & Link to Contributing*/}
      <Ongoing />

      {/* Changelog.tsx | CHANGELOG */}
      <Changelog />
    </div>
  );
}
