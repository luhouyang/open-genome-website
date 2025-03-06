import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/contribute/")({
  component: Contribute,
});

function Contribute() {
  return (
    <div className="relative z-0">
      {/* TITLE & DESCRIPTION */}

      {/* OUR COMMITTMENT & TESTIMONY*/}

      {/* LINKS TO WHITE PAPER, AGREEMENT & ON-BOARDING */}

      {/* SIGN-UP FORM */}

      {/* CONTRIBUTORS */}
      <div>Hello "/contribute/"!</div>
    </div>
  );
}
