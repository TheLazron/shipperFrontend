import { useState } from "react";
import "./App.css";
import MainPage from "./mainPage";
import { useNavigate } from "react-router-dom";

import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  List,
  Button,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

function App() {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="App">
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar p="md" width={{ sm: 200, lg: 300 }}>
            <List className="flex flex-col gap-5 mt-9">
              <Button
                radius="xl"
                size="lg"
                color="green"
                onClick={navigate("/requested-shipments")}
              >
                Requested Shipments
              </Button>
              <Button
                radius="xl"
                size="lg"
                color="green"
                onClick={navigate("ongoing-shipments")}
              >
                Ongoing Ships
              </Button>
              <Button
                radius="xl"
                size="lg"
                color="green"
                onClick={navigate("/map-shipments")}
              >
                Map Shipments
              </Button>
            </List>
          </Navbar>
        }
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <Text>Shipper</Text>
            </div>
          </Header>
        }
      >
        <MainPage />
      </AppShell>
      );
    </div>
  );
}

export default App;
