import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { MantineProvider, Text } from "@mantine/core";
import App from "./App";
import "./index.css";
import MainPage from "./mainPage";
import OngoingShips from "./components/ongoingShips";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ongoing-ships" element={<OngoingShips />} />
        </Routes>
      </BrowserRouter> */}
      <MainPage />
    </MantineProvider>
  </React.StrictMode>
);
