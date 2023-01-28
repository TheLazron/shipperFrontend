import { List, Title } from "@mantine/core";
import RequestList from "./components/requestsList";
import axios from "axios";
import { useState, useEffect } from "react";
import constants from "../constants";

const companies = [
  {
    id: 1,
    companyName: "CompanyX",
    source: "India",
    destination: "USA",
    quantity: 400,
    predictedPrice: 5000,
    shippingPrice: 7000,
    status: "Packed",
  },
  {
    id: 1,
    companyName: "CompanyZ",
    source: "China",
    destination: "Dubai",
    quantity: 20,
    predictedPrice: 6000,
    shippingPrice: 7000,
    status: "Shipped",
  },
];

const MainPage = () => {
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(sessionStorage.getItem("accessToken"));
      const shippings = await axios.get(
        "http://143.244.136.61:3000/admin/shipping_requests",

        {
          headers: {
            Authorization: sessionStorage.getItem("accessToken"),
          },
        }
      );
      setPendingRequests(shippings.data);
      console.log(shippings);
    };
    fetchData();
  }, []);

  return (
    <>
      <RequestList
        title="Recent Requests"
        type="requests"
        companies={pendingRequests}
      />
      <div className="my-12"></div>
      <RequestList title="Current Ships" type="ships" companies={companies} />
    </>
  );
};

export default MainPage;
