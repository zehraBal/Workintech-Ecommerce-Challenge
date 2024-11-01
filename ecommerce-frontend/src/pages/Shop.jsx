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
  fetchProductsWithFilters,
  setOffset,
  clearProductList,
} from "../store/Actions/productActions";
import { useParams } from "react-router-dom";

export default function Shop() {
  const { categoryId, gender } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product_list);
  const totalProducts = useSelector((state) => state.product.total);
  const offset = useSelector((state) => state.product.offset);
  const limit = useSelector((state) => state.product.limit);
  const filter = useSelector((state) => state.product.filter);

  useEffect(() => {
    dispatch(setOffset(0));
    dispatch(clearProductList());
    loadMoreProducts();
  }, [categoryId, gender, filter]);

  const loadMoreProducts = () => {
    if (isLoading) return;
    setIsLoading(true);

    const filterParams = { ...filter, categoryId, gender };

    const fetchAction =
      categoryId || filter
        ? fetchProductsWithFilters(limit, offset, filterParams)
        : fetchProducts(limit, offset);

    dispatch(fetchAction)
      .then(() => {
        setIsLoading(false);
        if (products.length + limit >= totalProducts) {
          setHasMore(false);
        } else {
          dispatch(setOffset(offset + limit));
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
        dataLength={products.length} // The number of items currently loaded
        next={loadMoreProducts} // Load more on scroll
        hasMore={hasMore} // Check if more products are available
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
        <Products products={products} />
      </InfiniteScroll>

      {!hasMore && <ClientCard />}
    </section>
  );
}
