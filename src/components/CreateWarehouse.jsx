import { useState } from "react";
import {
  Text,
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Select,
  NumberInput,
  Radio,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import constants from "../../constants";

// import RequestItem from "./components/RequestItem";
// import RequestList from "./components/RequestList";
// import ShipItem from "./components/shipItem";

const CreateWarehouse = () => {
  const form = useForm({
    initialValues: {
      // email: '',
    },

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  return (
    <div className="App">
      <Text className="text-2xl">YourBusiness Dashboard </Text>
      <Box sx={{ maxWidth: 500 }} mx="auto" className="p-10">
        <Text>Add new Warehouse</Text>
        <form
          onSubmit={form.onSubmit((values) => {
          
            console.log("adding new W");
            axios
              .post(constants.hostUrl + "/warehouses", {
                warehouse: {
                  name: values.name,
                  location: values.location,
                  max_items: values.maxItems,
                },
              }, {
                headers: {
                  "Authorization": sessionStorage.getItem('accessToken')
                }})
              .then((response) => {
                // sessionStorage.setItem('accessToken', response.headers.authorization);
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          })}
        >
          <TextInput
            withAsterisk
            label="Warehouse Name"
            placeholder="Name"
            {...form.getInputProps("name")}
          />
          <Select
            label="Warehouse Location"
            placeholder="Select a Location"
            searchable
            nothingFound="No options"
            data={["india", "sri lanka", "pakistan"]}
            withAsterisk
            {...form.getInputProps("location")}
          />
          <NumberInput
      defaultValue={10}
      placeholder=""
      label="Quantity"
      withAsterisk
      {...form.getInputProps("maxItems")}
    />
          <Group position="center" mt="md">
            <Button type="submit">Confirm</Button>
          </Group>
        </form>
      </Box>
      {/* <RequestItem>
    </RequestItem>
    <RequestList></RequestList>
    <ShipItem></ShipItem> */}
    </div>
  );
};



export default CreateWarehouse;
