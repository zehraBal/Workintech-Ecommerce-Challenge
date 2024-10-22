import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchTopProducts,
  setBestSellers,
} from "../../store/Actions/productActions";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

export default function BestSellerSection() {
  const dispatch = useDispatch();
  const topProducts = useSelector((state) => state.product.best_sellers);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(setBestSellers([]));
    dispatch(fetchTopProducts());
  }, [dispatch]);
  if (!topProducts) {
    return (
      <div>
        Loading...<span></span>
      </div>
    ); // or render a loading indicator
  }
  return (
    <section className="flex flex-wrap items-center justify-between gap-[30px] sm:flex-col">
      {topProducts.map((p, index) => {
        // console.log("category_id", p.category_id);
        return (
          <ProductCard
            key={index}
            category_id={p.category_id}
            description={p.description}
            images={p.images}
            name={p.name}
            price={p.price}
            product_id={p.id}
          />
        );
      })}
    </section>
  );
}
