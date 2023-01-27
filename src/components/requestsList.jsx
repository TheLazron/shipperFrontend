import {
  Title,
  List,
  Card,
  Text,
  Modal,
  NumberInput,
  Button,
  Select,
} from "@mantine/core";
import { useState } from "react";
import RequestItem from "./requestItem";
import ShipItem from "./shipItem";

const RequestList = (props) => {
  const [opened, setOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);
  const [editModalData, setEditModalData] = useState({});
  const openModal = () => {
    setOpened(true);
  };

  const setEditModal = () => {
    setEditOpened(true);
  };

  const setModalData = () => {};
  return (
    <div className="flex flex-col gap-12">
      <Modal
        opened={editOpened}
        onClose={() => setEditOpened(false)}
        styles={{ padding: 12 }}
      >
        <Title className="mb-4">Update Current Shiping</Title>
        <div className="flex">
          <div className="flex flex-col gap-4">
            <Text>Update Shipping Price</Text>
            <NumberInput
              className="basis-1/2 mr-4"
              defaultValue={editModalData.shippingPrice}
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              formatter={(value) =>
                !Number.isNaN(parseFloat(value))
                  ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : "$ "
              }
            />
          </div>
          <div className="flex flex-col gap-4">
            <Text>Update Shipping Status</Text>
            <Select
              placeholder="Pick one"
              defaultValue={editModalData.status}
              data={[
                { value: "Packed", label: "Packed" },
                { val: "Dispatched", label: "Dispatched" },
                { value: "Shipped", label: "Shipped" },
                { value: "Delivered", label: "Delivered" },
              ]}
            />
          </div>
        </div>
      </Modal>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <Title order={3} className="self-center">
          Perform an action for the requested shipment
        </Title>

        <div className="flex mt-8">
          <NumberInput
            className="basis-1/2 mr-4"
            defaultValue={0}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
          <Button className="basis-1/2" color="teal">
            Propose and Accept
          </Button>
        </div>
      </Modal>
      <Title order={1} className="self-start">
        {props.title}
      </Title>

      <Card shadow="md" radius="lg">
        {props.type == "requests" ? (
          <div className="flex justify-between">
            <Text className="basis-[20%]">SNo.</Text>
            <Text className="basis-[20%]">Company Name</Text>
            <Text className="basis-[20%]">Source</Text>
            <Text className="basis-[20%]">Destination</Text>
            <Text className="basis-[20%]">Quantity</Text>
            <Text className="basis-[20%]">Predicted Price</Text>
            <Text className="basis-[20%]">Action</Text>
          </div>
        ) : (
          <div className="flex justify-between">
            <Text className="basis-[20%]">SNo.</Text>
            <Text className="basis-[20%]">Company Name</Text>
            <Text className="basis-[20%]">Source</Text>
            <Text className="basis-[20%]">Destination</Text>
            <Text className="basis-[20%]">Quantity</Text>
            <Text className="basis-[20%]">Shipping Price</Text>
            <Text className="basis-[20%]">Status</Text>
          </div>
        )}
        <List>
          {props.type == "requests"
            ? props.companies.map((company, index) => {
                return (
                  <RequestItem
                    onClickHandler={openModal}
                    key={index}
                    index={index}
                    companyName={company.companyName}
                    source={company.source}
                    destination={company.destination}
                    quantity={company.quantity}
                    predictedPrice={company.predictedPrice}
                  />
                );
              })
            : props.companies.map((company, index) => {
                return (
                  <ShipItem
                    onClickHandler={setEditModal}
                    onClickModalSetter={() => {
                      setEditModalData({
                        shippingPrice: company.shippingPrice,
                        status: company.status,
                      });
                      console.log(editModalData);
                    }}
                    key={index}
                    index={index}
                    companyName={company.companyName}
                    source={company.source}
                    destination={company.destination}
                    quantity={company.quantity}
                    shippingPrice={company.shippingPrice}
                    status={company.status}
                  />
                );
              })}
        </List>
      </Card>
    </div>
  );
};

export default RequestList;
