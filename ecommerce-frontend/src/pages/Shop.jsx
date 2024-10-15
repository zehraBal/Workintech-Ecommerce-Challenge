import { useEffect } from "react";
import {
  fetchCategories,
  fetchProducts,
} from "../store/Actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import ShopHeader from "../components/ShopComponents/ShopHeader";
import ShopCategories from "../components/ShopComponents/ShopCategories";

export default function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product_list);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log("Shop products: ", products);

  return (
    <section className="flex items-center justify-center flex-col">
      <ShopHeader />
      <ShopCategories />
    </section>
  );
}
