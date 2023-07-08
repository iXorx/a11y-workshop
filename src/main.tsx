import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import {
  AltText,
  Contrast,
  EmptyButtons,
  EmptyLinks,
  Labels,
  Landing,
  Lang,
} from "./pages";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Routes>
        <Route path="/alt" element={<AltText />} />
        <Route path="/contrast" element={<Contrast />} />
        <Route path="/empty-buttons" element={<EmptyButtons />} />
        <Route path="/empty-links" element={<EmptyLinks />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/lang" element={<Lang />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
