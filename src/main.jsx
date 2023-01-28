import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider, Text } from "@mantine/core";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import App from "./App";
import "./index.css";
import SignUp from "./components/signUp";
import RequestShipment from "./components/requestShipment";
import CreateWarehouse from "./components/CreateWarehouse";
import SignIn from "./components/signIn";
import InventoryManagement from "./components/inventory";
import Admin from "./components/adminSignin";
import Landing from "./landing";
import TrackShipment from "./TrackShipment";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/request" element={<RequestShipment />} />
            <Route path="/warehouse-new" element={<CreateWarehouse />} />
            <Route path="/inventory-mgmt" element={<InventoryManagement />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/track" element={<TrackShipment />} />
          </Routes>
        </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);

/*

*/
