import { Title } from "@mantine/core";
import RequestList from "./requestsList";
import { useEffect, useState } from "react";
import axios from "axios";
import constants from "../../constants";
// const companies = [
//   {
//     id: 1,
//     companyName: "CompanyX",
//     source: "India",
//     destination: "USA",
//     quantity: 400,
//     predictedPrice: 5000,
//     shippingPrice: 7000,
//     status: "Packed",
//   },
//   {
//     id: 1,
//     companyName: "CompanyZ",
//     source: "China",
//     destination: "Dubai",
//     quantity: 20,
//     predictedPrice: 6000,
//     shippingPrice: 7000,
//     status: "Shipped",
//   },
// ];

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
