import { Link, useNavigate } from "react-router-dom";

export default function CategoryCard({
  category_name,
  category_rate,
  category_id,
  bg_image,
  gender,
}) {
  function replaceTurkishChars(str) {
    return str
      .replace(/ç/g, "c")
      .replace(/ğ/g, "g")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ş/g, "s")
      .replace(/ü/g, "u")
      .replace(/Ç/g, "C")
      .replace(/Ğ/g, "G")
      .replace(/İ/g, "I")
      .replace(/Ö/g, "O")
      .replace(/Ş/g, "S")
      .replace(/Ü/g, "U");
  }

  const category_gender = gender == "k" ? "kadin" : "erkek";
  const name = replaceTurkishChars(category_name.toLowerCase());

  return (
    <Link
      to={`/shop/${category_gender}/${name}/${category_id}`}
      className="no-underline"
    >
      <div
        className="h-[245px] w-[205px] relative bg-black bg-cover bg-center flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center">
          <h6 className="text-base font-bold text-white">{category_name}</h6>
          <h6 className="text-sm text-white">{category_rate}</h6>
        </div>
      </div>
    </Link>
  );
}
