import { Button, Card, Text } from "@mantine/core";

const RequestItem = (props) => {
  return (
    <div className="my-4">
      <Card
        className="flex justify-between items-center"
        radius="lg"
        shadow="md"
        withBorder
        sty
      >
        <Text className="id basis-[20%]">{props.index}</Text>
        <Text className="businessName basis-[20%]">{props.companyName}</Text>
        <Text className="source basis-[20%]">{props.source}</Text>
        <Text className="destination basis-[20%] self-center">
          {props.destination}
        </Text>
        <Text className="quantity basis-[20%]">{props.quantity}</Text>
        <Text className="predictedPrice basis-[20%]">
          ${props.predictedPrice}
        </Text>
        <Text className="ConfirmShipment basis-[20%]">
          <Button
            color="green"
            onClick={() => {
              props.onClickHandler();
              return props.index;
            }}
          >
            Action
          </Button>
        </Text>
      </Card>
    </div>
  );
};

export default RequestItem;
