import { useEffect, useState } from "react";
import RequestList from "./requestsList";
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

const RequestedShips = () => {
  const [companies, setCompaniesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let cData = await axios.get(
        constants.hostUrl + "/admin/shipping_requests",
        {
          headers: {
            Authorization: sessionStorage.getItem("accessToken"),
          },
        }
      );
      setCompaniesData(cData.data);
      console.log(cData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <RequestList
        title="Shipping Requests"
        companies={companies}
        type="requests"
      />
    </div>
  );
};

export default RequestedShips;
