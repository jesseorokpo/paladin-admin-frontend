import React from "react";
import ReactDOM from "react-dom/client";
import "./firebase-init";
import "./index.css";
import App from "./app/index";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
