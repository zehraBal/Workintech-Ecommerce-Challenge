import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../components/LayoutComponents/ProductCard";
import ClientCard from "../components/LayoutComponents/ClientCard";
import {
  fetchProducts,
  fetchProductsWithFilters,
  setOffset,
  clearProductList,
} from "../store/Actions/productActions";
import BreadCrumbs from "../components/LayoutComponents/BreadCrumbs";
import ShopCategories from "../components/ShopComponents/ShopCategories";
import FilterSection from "../components/ShopComponents/FilterSection";
export default function Shop() {
  const { categoryId, gender } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product_list);
  const totalProducts = useSelector((state) => state.product.total);
  const limit = useSelector((state) => state.product.limit);
  const filter = useSelector((state) => state.product.filter);

  const totalPages = Math.ceil(totalProducts / limit);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      dispatch(clearProductList());

      const offset = (currentPage - 1) * limit;
      dispatch(setOffset(offset));

      const filterParams = { ...filter, categoryId, gender };
      const fetchAction =
        categoryId || filter
          ? fetchProductsWithFilters(limit, offset, filterParams)
          : fetchProducts(limit, offset);

      try {
        await dispatch(fetchAction);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch, currentPage, limit, filter, categoryId, gender]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const renderPagination = () => {
    let pageNumbers = [];
    let leftSide = currentPage - 2;
    let rightSide = currentPage + 2;

    if (leftSide <= 0) leftSide = 1;
    if (rightSide > totalPages) rightSide = totalPages;

    for (let i = leftSide; i <= rightSide; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 mx-1 rounded-md transition-colors duration-300 ${
            currentPage === i
              ? "bg-blue text-white"
              : "bg-sec text-prim hover:bg-blue hover:text-white"
          }`}
        >
          {i}
        </button>
      );
    }
    return (
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-sec text-prim rounded-md disabled:opacity-50 hover:bg-blue hover:text-white transition-colors duration-300"
        >
          Previous
        </button>

        {leftSide > 1 && <span className="mx-2">...</span>}

        {pageNumbers}

        {rightSide < totalPages && <span className="mx-2">...</span>}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-sec   text-prim rounded-md disabled:opacity-50 hover:bg-blue hover:text-white transition-colors duration-300"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="w-[85%] flex justify-between items-center flex-wrap py-5">
        <h2 className="text-prim font-bold">Shop</h2>
        <BreadCrumbs name={"Shop"} address={"/shop"} />
      </div>
      <ShopCategories />
      <FilterSection />
      <div className="w-[85%] flex gap-12 items-center justify-center flex-wrap py-12">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            category_id={p.category_id}
            description={p.description}
            images={p.images}
            name={p.name}
            price={p.price}
            product_id={p.id}
          />
        ))}
      </div>
      {isLoading ? <span className="bigSpinner"></span> : renderPagination()}
      <ClientCard />
    </section>
  );
}
