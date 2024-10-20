import ShopHeader from "../components/ShopComponents/ShopHeader";
import ShopCategories from "../components/ShopComponents/ShopCategories";
import Products from "../components/ShopComponents/Products";
import ClientCard from "../components/LayoutComponents/ClientCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterSection from "../components/ShopComponents/FilterSection";
import {
  fetchProducts,
  setLimit,
  setOffset,
  setProductList,
} from "../store/Actions/productActions";

export default function Test() {
  const [isLoading, setIsLoading] = useState(false);
  const offset = useSelector((state) => state.product.offset);
  const limit = useSelector((state) => state.product.limit);
  const filter = useSelector((state) => state.product.filter); // Get filter state
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product_list);
  const totalProducts = useSelector((state) => state.product.total);

  useEffect(() => {
    dispatch(setOffset(0));
    loadMoreProducts();
    console.log("loaded more products");
  }, [filter]);
  console.log("shop page filter:", filter);
  const loadMoreProducts = () => {
    setIsLoading(true);
    dispatch(fetchProducts(limit, offset, filter)) // Pass filter to fetchProducts
      .then(() => {
        setIsLoading(false);
        if (products.length >= totalProducts) {
          setHasMore(false);
        } else {
          dispatch(setOffset(offset + limit));
          dispatch(setLimit(limit));
        }
      })
      .catch(() => setIsLoading(false));
  };

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <ShopHeader />
      <ShopCategories />
      <FilterSection />
      <InfiniteScroll
        dataLength={products.length}
        next={loadMoreProducts}
        hasMore={hasMore}
        endMessage={<p>No more products to load</p>}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "visible",
        }}
      >
        <Products />
      </InfiniteScroll>

      {!hasMore && <ClientCard />}
    </section>
  );
}
