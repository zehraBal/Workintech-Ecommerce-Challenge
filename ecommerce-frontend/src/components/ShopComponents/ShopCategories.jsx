import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import { useEffect } from "react";
import { fetchCategories } from "../../store/Actions/productActions";

export default function ShopCategories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categoriesToShow = categories.slice(0, 5);
  console.log("categories", categoriesToShow);
  return (
    <section className="w-full flex justify-center items-center bg-[#FAFAFA] pb-12">
      <div className="w-[85%] flex items-center justify-between flex-wrap">
        {categoriesToShow.map((c) => {
          const tit = c.title.toUpperCase();
          return (
            <CategoryCard
              key={c.id}
              category_name={tit}
              category_link={c.code}
              category_rate={c.rating}
              bg_image={c.img}
            />
          );
        })}
      </div>
    </section>
  );
}
