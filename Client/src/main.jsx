import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { WorkoutContextProvider } from "../src/context/WorkoutContex";
import { AuthContextProvider } from "../src/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <WorkoutContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WorkoutContextProvider>
  </AuthContextProvider>
);
