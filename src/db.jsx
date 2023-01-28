import { useState } from "react";
// import "./App.css";
import MainPage from "./mainPage";
import { Link, useLocation } from "react-router-dom";
import OngoingShips from "./components/ongoingShips";
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
import RequestedShips from "./components/requestedShips";
import ShipmentLocations from "./components/shipmentLocations";

const Db = () => {
  const [opened, setOpened] = useState(false);

  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar p="md" width={{ sm: 200, lg: 300 }}>
            <List className="flex flex-col gap-5 mt-9">
              <Link to="/dboard/requests" element={<RequestedShips />}>
                <Button radius="xl" size="lg" className="bg-best">
                  Requested Shipments
                </Button>
              </Link>
              <Link to="/dboard/ongoing" element={<OngoingShips />}>
                <Button radius="xl" size="lg" className="bg-best">
                  Ongoing Ships
                </Button>
              </Link>
              <Link
                to="/dboard/shipmentLocations"
                element={<ShipmentLocations />}
              >
                <Button radius="xl" size="lg" className="bg-best">
                  Shipment Locations
                </Button>
              </Link>
            </List>
          </Navbar>
        }
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <Text size="xl" className="font-Poppins text-3xl">
                Shipper.
              </Text>
            </div>
          </Header>
        }
      >
        {location.pathname == "/dboard/" ? (
          <MainPage />
        ) : location.pathname == "/dboard/ongoing" ? (
          <OngoingShips />
        ) : location.pathname == "/dboard/requests" ? (
          <RequestedShips />
        ) : location.pathname == "/dboard/shipmentLocations" ? (
          <ShipmentLocations />
        ) : (
          <MainPage />
        )}
      </AppShell>
    </div>
  );
};

export default Db;
