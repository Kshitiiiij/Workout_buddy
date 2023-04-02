import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import {WorkoutContextProvider} from '../src/context/WorkoutContex'
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <WorkoutContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WorkoutContextProvider>

  
);
