import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "../routes";
import "./index.css";

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
