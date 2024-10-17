import ShopHeader from "../components/ShopComponents/ShopHeader";
import ShopCategories from "../components/ShopComponents/ShopCategories";
import Products from "../components/ShopComponents/Products";
import ClientCard from "../components/LayoutComponents/ClientCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setLimit,
  setOffset,
} from "../store/Actions/productActions";

export default function Shop() {
  const [isLoading, setIsLoading] = useState(false);
  const offset = useSelector((state) => state.product.offset);
  const limit = useSelector((state) => state.product.limit);
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product_list);
  const totalProducts = useSelector((state) => state.product.total_count);

  useEffect(() => {
    loadMoreProducts();
  }, []);

  const loadMoreProducts = () => {
    setIsLoading(true);
    dispatch(fetchProducts(limit, offset))
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
