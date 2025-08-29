import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "./screens/Box";
import { AboutUs } from "./screens/AboutUs";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Box />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  </StrictMode>,
);