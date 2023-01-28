import { useState } from "react";
import { Text } from "@mantine/core";
import "./App.css";
import MainPage from "./mainPage";
import { TokenProvider } from "./contexts/tokenContext";


function App() {
  return (
    <TokenProvider>
    <div className="App">
      <MainPage />
    </div>
    </TokenProvider>
  );
}

export default App;
