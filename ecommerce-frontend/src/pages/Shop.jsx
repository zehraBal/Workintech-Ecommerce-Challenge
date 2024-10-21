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
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const offset = useSelector((state) => state.product.offset);
  const limit = useSelector((state) => state.product.limit);
  const filter = useSelector((state) => state.product.filter); // Get filter state
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product_list);
  const totalProducts = useSelector((state) => state.product.total);

  useEffect(() => {
    dispatch(setOffset(0)); // offset'i sıfırla
    dispatch(clearProductList()); // Ürün listesini temizle
    loadMoreProducts(); // Yeni ürünleri yükle
  }, [categoryId, filter]); // categoryId veya filter değiştiğinde tetiklenir

  const loadMoreProducts = () => {
    setIsLoading(true);

    if (categoryId || filter) {
      // Eğer URL'de categoryId varsa, fetchProductsWithFilters kullan
      const filterParams = { ...filter, categoryId }; // filter'a categoryId ekle
      dispatch(fetchProductsWithFilters(limit, offset, filterParams))
        .then(() => {
          setIsLoading(false);
          if (products.length >= totalProducts) {
            setHasMore(false); // Yüklenebilecek ürün kalmadı
          } else {
            dispatch(setOffset(offset + limit)); // Yeni offset hesapla
          }
        })
        .catch(() => setIsLoading(false));
    } else {
      // Eğer URL'de categoryId yoksa, tüm ürünleri getir
      dispatch(fetchProducts(limit, offset))
        .then(() => {
          setIsLoading(false);
          if (products.length >= totalProducts) {
            setHasMore(false); // Yüklenebilecek ürün kalmadı
          } else {
            dispatch(setOffset(offset + limit)); // Yeni offset hesapla
          }
        })
        .catch(() => setIsLoading(false));
    }
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
