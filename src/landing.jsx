import { AppShell, Navbar, Header, Flex } from "@mantine/core";
import { useState } from "react";
import {
  Text,
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  BackgroundImage,
  Center,
} from "@mantine/core";
import { Link } from "react-router-dom";

// import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import Artboard from "./assets/Artboard6.png";
import TrackShipment from "./TrackShipment";

function Landing() {
  return (
    <AppShell
      header={
        <Header height={90} className="bg-black justify-between px-10" display="flex" align="center">

          <Text display="flex" className="text-right text-white items-center font-Poppins text-3xl">Shipper.</Text>

            <Text
              className="text-right items-center font-Poppins text-3Zsm text-white" display="flex"
            >
              <Link to="/track" element={TrackShipment}>
            <Button color="dark" size="md" radius="lg" className=" hover:bg-grey bg-best" >
              Track your shipment
            </Button>
              </Link>
              
            </Text>
       
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
      {
        <Box className="h-full">
          <BackgroundImage src={Artboard} className="h-full">
          <Flex direction="column" className="px-10 pt-40" align="flex-end" justify="flex-end" wrap="wrap" gap="md">
            
            <Text
              color="white"
              className="text-6xl text-right text-black font-bold"
            >
              TRANSPORT <br></br>LOGISTICS
            </Text>
            <Text
              color="white"
              className="w-4/12 text-right text-black"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum.
            </Text>
            <Link to ="/signin" element={SignIn}>
            <Button color="dark" radius="xl" size="lg" className="bg-best2w" >
              Get Started
            </Button>
            </Link>
            </Flex>
          </BackgroundImage>
        </Box>
      }
    </AppShell>
  );
}
export default Landing;