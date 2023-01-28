import { AppShell, Navbar, Header, Flex } from "@mantine/core";
import { useState, useEffect } from "react";
import { Timeline } from '@mantine/core';
import "./index.css";
import axios from "axios";
import { Modal } from '@mantine/core';

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

const dict = {
  "pending": 0,
  "accepted": 1,
  "shipped": 2,
  "delivered": 3,
}


function TrackShipment() {

const [post, setPost] = useState(0);
const [opened, setOpened] = useState(true);
const [id, setId] = useState(null);

const fetchTrackingDetails = () => {
  axios.get(`http://143.244.136.61:3000/shippings/${id}`)
  .then((response) => setPost(response.data)).catch(error => {
    console.log(error);
  });;
}
  



console.log(post);

  return (
    <AppShell
      header={
        <Header height={90} className="bg-black justify-between px-10" display="flex" align="center">

          <Text display="flex" className="text-right text-white items-center font-Poppins text-3xl">Shipper.</Text>

            
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
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Enter your ID:"
      >

          <TextInput radius="lg" placeholder="Enter your ID"  
          onChange={(e) => setId(e.target.value)}
          />
          <Button type="submit" color="dark" size="sm" radius="lg" className="mt-8 hover:bg-grey bg-best" onClick={()=>fetchTrackingDetails()}
          disabled={id === null}
          >Submit</Button>
      </Modal>
    </>
    
      {
        

        // button to open modal
      <Flex direction="column" className="px-10 pt-40" align="center" justify="flex-end" wrap="wrap" gap="md">
      <Button color="dark" className="bg-best mb-10" onClick={() => setOpened(true)}>Enter Tracking ID</Button>
      <Timeline active={dict[post.status]} bulletSize={24} lineWidth={2}>
      <Timeline.Item title="Order Received">
        <Text color="dimmed" size="sm">Pending</Text>
      </Timeline.Item>

      <Timeline.Item title="Item ready to be shipped">
        <Text color="dimmed" size="sm">Accepted</Text>

      </Timeline.Item>

      <Timeline.Item title="In-Transit" lineVariant="dashed">
        <Text color="dimmed" size="sm">Shipped</Text>
        
      </Timeline.Item>

      <Timeline.Item title="Item Delivered">
        <Text color="dimmed" size="sm">Shipment Delivered</Text>
        
      </Timeline.Item>
    </Timeline>
    <Box padding="0px" align="center" className="mt-20 text-xs">
    <Text color="dimmed" size="sm">Request generated at {post.created_at}</Text>
    <Text size="sm" weight="bold">Destination: {post.destination}</Text>
    <Text color="dimmed" size="sm">Last Updated: {post.created_at}</Text>
    </Box>
    </Flex>
      }
      
   </AppShell>
  );
}

export default TrackShipment;