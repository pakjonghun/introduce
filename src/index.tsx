import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Routers";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
