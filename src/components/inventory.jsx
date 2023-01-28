import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useForm } from "@mantine/form";
import constants from "../../constants";
import {
  CardSection,
  Card,
  Group,
  Badge,
  Button,
  Image,
  Text,
  SimpleGrid,
  Modal,
  Select,
  TextInput,
  NumberInput,
} from "@mantine/core";

const InventoryManagement = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  useEffect(() => {
    const fetchWarehouses = async () => {
      const warehouses = await axios.get(constants.hostUrl + "/warehouses", {
        headers: {
          Authorization: sessionStorage.getItem("accessToken"),
        },
      });
      setWarehouses(warehouses.data);
      console.log("warehouses", warehouses);
    };
    fetchWarehouses();

    const fetchCategories = async () => {
      const categories = await axios.get(constants.hostUrl + "/categories");
      setCategories(categories.data);
      console.log("categories", categories);
    };
    fetchCategories();
    // setCompanies(shippings);
  }, []);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const categories = await axios.get(constants.hostUrl + "/categories", {

  //     });
  //     setWarehouses(categories.data);
  //     console.log("categories", categories);
  //   };
  //   fetchCategories();
  // }, []);

  const form = useForm({
    initialValues: {
      // email: '',
    },

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const [opened, setOpened] = useState(false);
  const [openedCard, setOpenedCard] = useState({ name: "" });
  console.log("ididid", openedCard.id);

  // show all warehouses
  return (
    <div>
      <Text className="text-2xl pb-10">YourBusiness Warehouses </Text>
      <Modal
        size="50%"
        opened={opened}
        onClose={() => setOpened(false)}
        title={openedCard.name + " Inventory"}
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
      >
        <Text className="py-3">Add new Item</Text>
        <form
          onSubmit={form.onSubmit((values) => {
            // console.log("category:" + values.category.id);
            axios
              .post(
                constants.hostUrl + "/warehouses/" + openedCard.id + "/items",
                {
                  item: {
                    name: values.name,
                    quantity: values.quantity,
                    category_id: categoryId,
                    // id: values.id,
                  },
                },
                {
                  headers: {
                    Authorization: sessionStorage.getItem("accessToken"),
                  },
                }
              )
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
            label="Item Name"
            placeholder="Name"
            {...form.getInputProps("name")}
          />
          {/* <TextInput withAsterisk label="Item ID" placeholder="ID"       {...form.getInputProps('id')}
          /> */}
          <Select
            label="Category"
            placeholder="Select a Category"
            searchable
            nothingFound="No options"
            data={categories.map((category) => {
              return {
                label: category.name,
                value: category.id,
              };
            })}
            withAsterisk
            onChange={
              (categorySelect) => {
               setCategoryId(categorySelect)
              }
            }
            //getinputprops of select



          />
          <NumberInput
            defaultValue={10}
            placeholder=""
            label="Quantity"
            withAsterisk
            {...form.getInputProps("quantity")}
          />
          <Group position="center" mt="md">
            <Button type="submit">Confirm</Button>
          </Group>
        </form>
      </Modal>
      <SimpleGrid cols={4}>
        {warehouses.map((warehouse) => {
          return (
            <Card shadow="sm" p="lg" radius="md" withBorder className="">
              <Text weight={500} className="text-center">
                {warehouse.name}
              </Text>
              <Text size="sm" color="dimmed">
                {warehouse.location}
              </Text>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => {
                  setOpened(true);
                  setOpenedCard({
                    name: warehouse.name,
                    id: warehouse.id,
                    location: warehouse.location,
                  });
                  console.log(warehouse.name + "pressed");
                }}
              >
                Update Inventory
              </Button>
            </Card>
          );
        })}
      </SimpleGrid>
    </div>
  );
};
export default InventoryManagement;
