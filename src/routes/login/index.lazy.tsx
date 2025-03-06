import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/login/")({
  component: Login,
});

function Login() {
  return (
    <div className="relative z-0">
      {/* TITLE & DESCRIPTION */}

      {/* USER OR CONTRIBUTOR */}

      {/* USER FORM */}

      {/* CONTRIBUTOR FORM */}
      <div>Hello "/login/"!</div>
    </div>
  );
}
