import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider} from "@mantine/core";
import App from "./App";
import "./index.css";
import "tailwindcss/tailwind.css"
import TrackShipment from "./TrackShipment";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <TrackShipment/>
    </MantineProvider>
  </React.StrictMode>
);
