import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../LayoutComponents/ProductCard";
import { fetchProducts, setOffset } from "../../store/Actions/productActions";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Products() {
  const [isLoading, setIsLoading] = useState(false);
  const offset = useSelector((state) => state.product.offset);
  const limit = useSelector((state) => state.product.limit);
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product_list);
  const totalProducts = useSelector((state) => state.product.total_count); // Assume this is available in the API response

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
    <section className="w-full flex items-center justify-center flex-wrap">
      {isLoading && <span className="bigSpinner"></span>}
      <InfiniteScroll
        dataLength={products.length}
        next={loadMoreProducts}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center items-center relative">
            <span className="bigSpinner"></span>
          </div>
        }
        endMessage={<p>No more products to load</p>}
        style={{ overflowY: "auto", height: "calc(100vh - 200px)" }} // Adjust height as needed
      >
        <div className="w-full flex gap-12 items-center justify-center flex-wrap py-12">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              category_id={p.category_id}
              description={p.description}
              images={p.images}
              name={p.name}
              price={p.price}
            />
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
}
