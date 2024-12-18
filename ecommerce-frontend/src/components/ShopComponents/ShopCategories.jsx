import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../store/Actions/productActions";
import { useNavigate } from "react-router-dom";

export default function ShopCategories() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleCategoryClick = (category) => {
    navigate(
      `/shop/${category.gender}/${category.title.toLowerCase()}/${category.id}`
    );
  };

  return (
    <section className="w-full flex justify-center items-center bg-[#FAFAFA] pb-12">
      {isLoading ? (
        <span className="spinner"></span> // Show loading spinner if categories are being fetched
      ) : (
        <div className="w-[85%] flex items-center justify-between flex-wrap sm:flex-col sm:gap-5 space-y-4">
          {topCategories.map((c) => {
            const title = c.title.toUpperCase();
            return (
              <CategoryCard
                key={c.id}
                category_name={title}
                category_id={c.id}
                category_rate={c.rating}
                bg_image={c.img}
                gender={c.gender}
                onClick={() => handleCategoryClick(c)} // Handle category click
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
