import { useState, useEffect } from "react";
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

const RequestShipment = () => {
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([]);
  const [ItemId, setItemId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [oneSelected, setOneSelected] = useState(null);

  const [quantity, setQuantity] = useState(0);

  const [selectedItem, setSelectedItem] = useState({});
  const [itemCategories, setItemCategories] = useState({});
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState(0);
  const [loading, setLoading] = useState(false);

  const [shipping, SetShipping] = useState({});

  useEffect(() => {
    let otherCountry = oneSelected === "source" ? source : destination;
    fetch(constants.hostUrl + "/distance?origin="+otherCountry)
      .then((response) => response.json())
      .then((data) => {
        setDistance(data.distance);
      }
    );
    // if source is empty, source is India
    // if destination is empty, destination is India
    
    if(source===""){
      setSource("India");
    }
    if(destination===""){
      setDestination("India");
    }
    if (source ==="" && destination ===""){
      setSource("");
      setDestination("");
    }
  }, [oneSelected, source, destination]);

  useEffect(() => {
    // const fetchCategories = async () => {
    //   const categories = await axios.get(constants.hostUrl + "/categories");
    //   setCategories(categories.data);
    //   // console.log("categories", categories);
    // };
    // fetchCategories();

    const fetchItems = async () => {
      const itemsRes = await axios.get(constants.hostUrl + "/business/items", {
        headers: {
          Authorization: sessionStorage.getItem("accessToken"),
        },
      });
      setItems(itemsRes.data);
      console.log("items", itemsRes);
      //map itemid with category id
      let itemCats = {};
      itemsRes.data.forEach((item) => {
        itemCats[item.id] = item.category_id;
      });
      setItemCategories(itemCats);

      console.log("itemCategories", itemCategories);
    };
    fetchItems();

    const fetchCategories = async () => {
      const categories = await axios.get(constants.hostUrl + "/categories");
      setCategories(categories.data);
      console.log("categories", categories);
    };
    fetchCategories();
  }, []);

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
        <Text>Request New Shipment</Text>
        <form
          onSubmit={form.onSubmit((values) => {
            setQuantity(values.quantity);
            console.log(itemCategories[ItemId]);
            axios
              .post(
                constants.hostUrl + "/shippings/",
                {
                  shipping: {
                    name: values.name,
                    quantity: form.values.quantity,
                    category_id: categoryId,
                    status: "pending",
                    shipping_type: values.shipping_type,
                    item_id: ItemId,
                    source: source,
                    destination: destination,
                    predicted_price: price,
                    

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
                // console.log(response);
              })
              .catch((error) => {
                // console.log(error);
              });
          })}
        >
          <Select
            label="Item Name - Warehouse"
            placeholder="Select item"
            searchable
            nothingFound="No options"
            data={items.map((item) => {
              return {
                label: item.name + "-" + item.warehouse.name,
                value: item.id,
              };
            })}
            onChange={(itemSelect) => {
              setItemId(itemSelect);
            }}              
            withAsterisk
            
            //getinputprops of select
          />

          {/* <Select
            label="Category"
            placeholder="Select a Category"
            searchable
            value=
            nothingFound="No options"
            data={categories.map((category) => {
              return {
                label: category.name,
                value: category.id,
              };
            })}
            withAsterisk
            onChange={(categorySelect) => {
              setCategoryId(categorySelect);
            }}
            //getinputprops of select
          /> */}
          <NumberInput
            defaultValue={quantity}
            value={quantity}
            placeholder=""
            label="Quantity"
            withAsterisk
            onChange={(value) => setQuantity(value)}
            {...form.getInputProps("quantity")}
          />
          <Select
            label="Type of Shipment"
            placeholder="Select a Type"
            searchable
            nothingFound="No options"
            data={["to-warehouse", "to-customer"]}
            withAsterisk
            onChange={(typeSelect) => {
              SetShipping(typeSelect);
            }}
            value={shipping}
          />
          <Select
            label="Source"
            placeholder="Select Source Country"
            searchable
            nothingFound="No options"
            data={constants.countries}
            withAsterisk
            onChange={(sourceSelect) => {
              setSource(sourceSelect);
              setOneSelected("source");
              console.log(sourceSelect);
            }}
            disabled={oneSelected === "destination"}    
            value = {oneSelected === "destination"?'India':source}
          />
          <Select
            label="Destination"
            placeholder="Select Destination Country"
            searchable
            nothingFound="No options"
            data={constants.countries}
            withAsterisk
            onChange={(destiSelect) => {
              setDestination(destiSelect);
              console.log(destiSelect);
              setOneSelected("destination");
            }}
            disabled={oneSelected === "source"}
            value = {oneSelected === "source"?'India':destination}
          />
          <Text>Our Estimated Price:</Text>
          <Text className="text-green-500">
            {price === 0 ? loading ? "Loading..." : "Not Calculated" : price}
          </Text>
          <Button
            onClick={ () => {
              setLoading(true);
             let categoryId = itemCategories[ItemId];
              let category = categories.find((category) => category.id === categoryId);
              let volume = category.volume;
              axios
                .post("http://143.244.136.61:8000/predict", {
                  quantity: form.values.quantity,
                  volume: volume,
                  distance: distance,
                })
                .then((response) => {
                  setPrice(response.data.prediction);
                  setLoading(false);
                })
                .catch((error) => {
                  // console.log(error);
                });
            }}
          >
            Calculate Cost
          </Button>
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

export default RequestShipment;
