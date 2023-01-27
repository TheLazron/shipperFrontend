import { Card, Text, Button, ActionIcon } from "@mantine/core";
import { Icon360, IconPencil } from "@tabler/icons";

const ShipItem = (props) => {
  return (
    <div className="my-4">
      <Card
        className="flex justify-between items-center"
        radius="lg"
        shadow="md"
        withBorder
      >
        <Text className="id basis-[20%]">{props.index}</Text>
        <Text className="businessName basis-[20%]">{props.companyName}</Text>
        <Text className="source basis-[20%]">{props.source}</Text>
        <Text className="destination basis-[20%]">{props.destination}</Text>
        <Text className="quantity basis-[20%]">{props.quantity}</Text>
        <Text className="shippingPrice basis-[20%]">{props.shippingPrice}</Text>
        <Text className="status basis-[20%]" weight="bold">
          {props.status}
        </Text>
        <Button
          onClick={() => {
            props.onClickHandler();
            props.onClickModalSetter();
          }}
          color="green"
          size="xs"
          radius="xl"
          variant="filled"
          className=""
        >
          O
        </Button>
      </Card>
    </div>
  );
};

export default ShipItem;
