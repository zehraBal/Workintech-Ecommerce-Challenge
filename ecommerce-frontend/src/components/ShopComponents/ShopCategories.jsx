import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../store/Actions/productActions";

export default function ShopCategories() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchCategories())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  return (
    <section className="w-full flex justify-center items-center bg-[#FAFAFA] pb-12">
      {isLoading && <span className="spinner"></span>}
      <div className="w-[85%] flex items-center justify-between flex-wrap">
        {topCategories.map((c) => {
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
