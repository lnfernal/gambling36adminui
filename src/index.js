
import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import App from "App";

// Vision UI Dashboard React Context Provider
import { VisionUIControllerProvider } from "context";

ReactDOM.render(
  <BrowserRouter>
    <VisionUIControllerProvider>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
      {/* <App /> */}
    </VisionUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
