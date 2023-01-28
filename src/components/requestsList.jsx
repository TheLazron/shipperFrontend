import { Title, List, Card, Text, Modal } from "@mantine/core";
import { useState } from "react";
import RequestItem from "./requestItem";
import ShipItem from "./shipItem";

const RequestList = (props) => {
  const [opened, setOpened] = useState(false);
  const openModal = () => {
    setOpened(true);
  };
  return (
    <div className="flex flex-col">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
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
                    onClick={openModal}
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
