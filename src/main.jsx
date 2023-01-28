import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MantineProvider, Text } from "@mantine/core";
import Db from "./db";
import "./index.css";
import MainPage from "./mainPage";
import OngoingShips from "./components/ongoingShips";
import LoginPage from "./login";
import RequestList from "./components/requestsList";
import RequestedShips from "./components/requestedShips";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dboard/ongoing" element={<Db />} />
          <Route path="/dboard/requests" element={<Db />} />
          <Route path="/dboard/shipmentLocations" element={<Db />} />
          <Route path="/dboard/" element={<Db />} />
          {/* <Route path="/dboard/maplocations" element={<Db />} /> */}
        </Routes>
      </Router>
    </MantineProvider>
  </React.StrictMode>
);
