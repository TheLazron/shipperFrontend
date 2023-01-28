import { List, Title } from "@mantine/core";
import RequestList from "./components/requestsList";
import axios from "axios";
import { useState, useEffect } from "react";
import constants from "../constants";

const MainPage = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [companies, setCompanies] = useState([]);

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

    const fetchData2 = async () => {
      let cData = await axios.get(constants.hostUrl + "/admin/shippings", {
        headers: {
          Authorization: sessionStorage.getItem("accessToken"),
        },
      });
      setCompanies(cData.data);
    };
    fetchData();
    fetchData2();
  }, []);

  return (
    <>
      <RequestList
        title="Recent Requests"
        type="requests"
        companies={pendingRequests}
      />
      <div className="my-12"></div>
      {/* <RequestList title="Current Ships" type="ships" companies={companies} /> */}
      <RequestList
        title="Ongoing Shipments"
        companies={companies}
        type="ongoing"
      />
    </>
  );
};

export default MainPage;
