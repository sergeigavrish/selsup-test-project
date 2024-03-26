import React from "react";
import ReactDOM from "react-dom/client";
import { ParamController } from "./features/param-editing/components/ParamController";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ParamController />
  </React.StrictMode>,
);
