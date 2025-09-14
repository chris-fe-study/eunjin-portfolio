import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "../routes";
import { AppQueryClientProvider } from "../providers";
import "./index.css";

async function enableMocking() {
  const { worker } = await import("./mock-worker");

  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <AppQueryClientProvider>
        <Router />
      </AppQueryClientProvider>
    </StrictMode>
  );
});
