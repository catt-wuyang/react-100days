import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./app";
import DisplayPage from "./display";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/:id" element={<DisplayPage />}></Route>
    </Routes>
  </HashRouter>
);
