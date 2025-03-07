import { createLazyFileRoute } from "@tanstack/react-router";

import { About, Quotes, Documents, Signup, Contributors } from "../../components/contribute";
import Loading from "../../components/Loading";

export const Route = createLazyFileRoute("/contribute/")({
  component: Contribute,
  pendingComponent: Loading
});

function Contribute() {
  return (
    <div className="relative z-0">
      {/* About.tsx | TITLE & OUR COMMITTMENT */}
      <About />

      {/* Quotes.tsx | QUOTES FROM CONTRIBUTORS */}
      <Quotes />

      {/* Documents.tsx | LINKS TO WHITE PAPER, AGREEMENT & ON-BOARDING */}
      <Documents />

      {/* Signup.tsx | SIGN-UP FORM */}
      <Signup />

      {/* Contributors.tsx | CONTRIBUTORS */}
      <Contributors />
    </div>
  );
}
