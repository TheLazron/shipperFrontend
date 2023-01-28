import { Card } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import constants from "../../constants";
import RequestList from "./requestsList";

const ShipmentLocations = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let cData = await axios.get(constants.hostUrl + "/admin/shippings", {
        headers: {
          Authorization: sessionStorage.getItem("accessToken"),
        },
      });
      setShips(cData.data);
      console.log(ships);
    };
    fetchData();
  }, []);

  return (
    <div>
      <RequestList
        title="Shipments Locations"
        companies={ships}
        type="location"
      />
    </div>
  );
};

export default ShipmentLocations;
