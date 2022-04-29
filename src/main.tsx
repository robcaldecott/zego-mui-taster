import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { App } from "./App";
import { Buttons } from "./Buttons";
import { Colours } from "./Colours";
import { Layout } from "./Layout";
import { Styling } from "./Styling";
import { Team } from "./Team";
import { theme } from "./theme";
import "./fonts.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Layout />} />
            <Route path="styling" element={<Styling />} />
            <Route path="team" element={<Team />} />
            <Route path="colours" element={<Colours />} />
            <Route path="buttons" element={<Buttons />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
