import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/toolkit/")({
  component: Toolkit,
});

function Toolkit() {
  return (
    <div className="relative z-0">
      {/* TITLE & DESCRIPTION*/}

      {/* CENTER BUTTON TO GitHub */}

      {/* POPULAR USAGES OF THE TOOL */}

      {/* CURRENTLY DEVELOPING FEATURES REQUIRING TALENT */}

      {/* CALL TO ACTION -> CONTRIBUTING PAGE */}
      <div>Hello "/toolkit/"!</div>
    </div>
  );
}
