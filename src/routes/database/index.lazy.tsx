import { createLazyFileRoute } from "@tanstack/react-router";

import { About, Datasets } from "../../components/database";
import Loading from "../../components/Loading";

export const Route = createLazyFileRoute("/database/")({
  component: Database,
  pendingComponent: Loading
});

function Database() {
  return (
    <div className="relative z-0">
      {/* About.tsx | TITLE & DESCRIPTION & GitHub */}
      <About />

      {/* Datasets.tsx | DATA CARDS FOR POPULAR MODEL DATABASES */}
      <Datasets />
    </div>
  );
}
