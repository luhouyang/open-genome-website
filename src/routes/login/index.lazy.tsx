import { createLazyFileRoute } from "@tanstack/react-router";

import { About, Authentication } from "../../components/login";
import Loading from "../../components/common/Loading";

export const Route = createLazyFileRoute("/login/")({
  component: Login,
  pendingComponent: Loading,
});

function Login() {
  return (
    <div className="relative z-0">
      {/* About.tsx | TITLE & DESCRIPTION */}
      <About />

      {/* Authentication.tsx | USER OR CONTRIBUTOR LOGIN */}
      <Authentication />
    </div>
  );
}
