import {
  Title,
  List,
  Card,
  Text,
  Modal,
  NumberInput,
  Button,
} from "@mantine/core";
import { useState } from "react";
import RequestItem from "./requestItem";
import ShipItem from "./shipItem";

const RequestList = (props) => {
  const [opened, setOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);
  const openModal = () => {
    setOpened(true);
  };

  const setEditModal = () => {
    setEditOpened(true);
  };
  return (
    <div className="flex flex-col gap-12">
      <Modal opened={editOpened} onClose={() => setEditOpened(false)}>
        <Title>Opendeds</Title>
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
