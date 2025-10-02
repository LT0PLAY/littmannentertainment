import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box } from "./screens/Box";
import { AboutUs } from "./screens/AboutUs";
import PrivacyPolicy from "./screens/PrivacyPolicy/PrivacyPolicy";
import Imprint from "./screens/Imprint/Imprint";
import { Roster } from "./screens/Roster";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Box />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/roster" element={<Roster />} />
      </Routes>
    </Router>
  </StrictMode>
);