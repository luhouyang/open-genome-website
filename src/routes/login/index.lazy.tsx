import { createLazyFileRoute } from "@tanstack/react-router";

import { About, Authentication } from "../../components/login";

export const Route = createLazyFileRoute("/login/")({
  component: Login,
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
