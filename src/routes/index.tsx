import { createFileRoute } from "@tanstack/react-router";

import { Hero, About, Timeline, Contact } from "../components/home";
import Loading from "../components/Loading";

export const Route = createFileRoute("/")({
  component: Home,
  pendingComponent: Loading
});

function Home() {
  return (
    <div className="relative bg-black">
      <Hero />
      <About />
      <Timeline />
      <Contact />
    </div>
  );
}
