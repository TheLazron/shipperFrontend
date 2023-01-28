import { Title } from "@mantine/core";
import RequestList from "./requestsList";
import { useEffect, useState } from "react";
import axios from "axios";
import constants from "../../constants";

const OngoingShips = () => {
  const [companies, setCompaniesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let cData = await axios.get(constants.hostUrl + "/admin/shippings", {
        headers: {
          Authorization: sessionStorage.getItem("accessToken"),
        },
      });
      setCompaniesData(cData.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <RequestList
        title="Ongoing Shipments"
        companies={companies}
        type="ongoing"
      />
    </>
  );
};

export default OngoingShips;
