import { useEffect } from "react";
import BestSellers from "../components/HomePageComponents/BestSellers";
import ClientCard from "../components/LayoutComponents/ClientCard";
import Clients from "../components/PricingComponents/Clients";
import DescriptionCard from "../components/ProductDetailComponents/DescriptionCard";
import DetailBestSellers from "../components/ProductDetailComponents/DetailBestSellers";
import ProductDetailBC from "../components/ProductDetailComponents/ProductDetailBC";
import ProductDetailCard from "../components/ProductDetailComponents/ProductDetailCard";
import ProductDetail from "./ProductDetail";
import axios from "axios";

export default function Test() {
  useEffect(() => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/products/4")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ProductDetailBC />
      <ProductDetailCard />
      <DescriptionCard />
      <DetailBestSellers />
      <ClientCard />
    </>
  );
}
