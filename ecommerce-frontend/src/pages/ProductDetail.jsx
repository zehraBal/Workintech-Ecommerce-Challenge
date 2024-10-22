import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductDetailCard from "../components/ProductDetailComponents/ProductDetailCard";
import ProductDetailBC from "../components/ProductDetailComponents/ProductDetailBC";
import DescriptionCard from "../components/ProductDetailComponents/DescriptionCard";
import DetailBestSellers from "../components/ProductDetailComponents/DetailBestSellers";
import ClientCard from "../components/LayoutComponents/ClientCard";
import { fetchProductById } from "../store/Actions/productActions";

export default function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product_by_id);
  const [isLoading, setIsLoading] = useState(false);
  // console.log("productId", productId);
  useEffect(() => {
    setIsLoading(true);
    if (productId) {
      dispatch(fetchProductById(productId));
      //  console.log("product fetched");
      setIsLoading(false);
    }
  }, [dispatch, productId]);
  // console.log("product", product);
  return (
    <>
      <ProductDetailBC />
      {isLoading ? (
        <span className="bigSpinner"></span>
      ) : (
        <ProductDetailCard product={product} />
      )}
      <DescriptionCard product={product} />
      <DetailBestSellers />
      <ClientCard />
    </>
  );
}
