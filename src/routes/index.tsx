import { createFileRoute } from "@tanstack/react-router";
import { Hero, About, Timeline, Contact } from "../components";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="relative z-0">
      {/* TITLE & DESCRIPTION*/}

      {/* CENTER BUTTON TO GitHub */}

      {/* POPULAR USAGES OF THE TOOL */}

      {/* CURRENTLY DEVELOPING FEATURES REQUIRING TALENT */}

      {/* CALL TO ACTION -> CONTRIBUTING PAGE */}
      <div>
        <Hero />
      </div>
      <About />
      <Timeline />
      <Contact />
    </div>
  );
}
