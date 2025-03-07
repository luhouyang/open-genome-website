import { StrictMode } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";
import Loading from "./components/Loading";

// Create a new router instance
const router = createRouter({ routeTree, defaultPendingComponent: Loading, defaultPreload: "intent", defaultComponent: Loading });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
