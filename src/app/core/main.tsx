import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "../routes";
import "./index.css";

async function enableMocking() {
  const { worker } = await import("./mock-worker");

  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Router />
    </StrictMode>
  );
});
