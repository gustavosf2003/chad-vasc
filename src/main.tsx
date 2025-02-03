import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import App from "./App.tsx";
import ChadVasc from "./ChadVasc.tsx";
import AboutMe from "./AboutMe.tsx";
import Glasgow from "./Glasgow.tsx";
import Cardiovascular from "./Cardiovascular.tsx";
import CKDTest from "./CKD.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chadvasc" element={<ChadVasc />} />
        <Route path="/sobre-mim" element={<AboutMe />} />
        <Route path="/glasgow" element={<Glasgow />} />
        <Route path="/cardiovascular" element={<Cardiovascular />} />
        <Route path="/ckd" element={<CKDTest />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
