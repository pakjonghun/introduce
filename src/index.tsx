import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Routers";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Router />
          <GlobalStyles />
        </HelmetProvider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
