import { useNavigate } from "react-router-dom";

export default function CategoryCard({
  category_name,
  category_rate,
  category_link,
  bg_image,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(category_link);
  };

  return (
    <div
      className="h-[245px] w-[205px] relative bg-black bg-cover bg-center flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
      style={{ backgroundImage: `url(${bg_image})` }}
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center">
        <h6 className="text-base font-bold text-white">{category_name}</h6>
        <h6 className="text-sm text-white">{category_rate}</h6>
      </div>
    </div>
  );
}