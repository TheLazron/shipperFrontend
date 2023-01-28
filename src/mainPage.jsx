import { List, Title } from "@mantine/core";
import RequestList from "./components/requestsList";
const companies = [
  {
    id: 1,
    companyName: "CompanyX",
    source: "India",
    destination: "USA",
    quantity: 400,
    predictedPrice: 5000,
    shippingPrice: 7000,
    status: "dispatched",
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
  return (
    <>
      <RequestList
        title="Recent Requests"
        type="requests"
        companies={companies}
      />
      <div className="my-12"></div>
      <RequestList title="Current Ships" type="ships" companies={companies} />
    </>
  );
};

export default MainPage;
