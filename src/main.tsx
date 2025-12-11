import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initSmoothScroll } from './utils/smooth-scroll';


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (typeof window !== 'undefined') {
  // small timeout ensures DOM is ready and header sizes are correct
  window.requestAnimationFrame(() => {
    initSmoothScroll();
  });
}