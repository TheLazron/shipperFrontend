import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import InventoryManagement from "./inventory";
import RequestShipment from "./requestShipment";
import CreateWarehouse from "./CreateWarehouse";

const NavShell = () => {
  const location = useLocation();
  return (
    <AppShell
      header={
        <Header
          height={90}
          className="bg-black justify-between px-10"
          display="flex"
          align="center"
        >
          <Text
            display="flex"
            className="text-right text-white items-center font-Poppins text-3xl"
          >
            Shipper.
          </Text>

          <div className="flex gap-12">
            <Link to="/dboard/inventory-mgmt">
              <Text>Inventory Management</Text>
            </Link>
            <Link to="/dboard/request">
              <Text>Request Shipment</Text>
            </Link>
            <Link to="/dboard/warehouse-new">
              <Text>Add Warehouse</Text>
            </Link>
          </div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          padding: 0,
        },
      })}
    >
      <div className="mt-12">
        {location.pathname == "/dboard/inventory-mgmt" ? (
          <InventoryManagement />
        ) : location.pathname == "/dboard/request" ? (
          <RequestShipment />
        ) : location.pathname == "/dboard/warehouse-new" ? (
          <CreateWarehouse />
        ) : (
          <InventoryManagement />
        )}
      </div>
    </AppShell>
  );
};

export default NavShell;
