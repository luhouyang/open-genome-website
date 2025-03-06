import { createFileRoute } from "@tanstack/react-router";
import { Hero, About, Timeline } from "../components";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="relative z-0">
      <div>
        <Hero />
      </div>
      <About />
      <Timeline />
    </div>
  );
}
