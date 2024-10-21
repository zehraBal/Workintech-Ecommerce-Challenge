import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ProductCard({
  product_id,
  category_id,
  description,
  images,
  name,
  price,
}) {
  const [productLink, setProductLink] = useState("");
  const categories = useSelector((state) => state.product.categories);

  useEffect(() => {
    const category = categories.find((cat) => cat.id === category_id);
    if (category) {
      const categoryName = slugify(category.title.toLowerCase());
      const gender = category.gender === "k" ? "kadin" : "erkek";
      const productName = slugify(name);
      const link = `/shop/${gender}/${categoryName}/${category.id}/${productName}/${product_id}`;
      setProductLink(link);
    }
  }, [categories]);
  const slugify = (text) => {
    const turkishMap = {
      ş: "s",
      Ş: "S",
      ı: "i",
      İ: "I",
      ç: "c",
      Ç: "C",
      ü: "u",
      Ü: "U",
      ö: "o",
      Ö: "O",
      ğ: "g",
      Ğ: "G",
    };

    const slug = text
      .replace(/[şŞıİçÇüÜöÖğĞ]/g, (char) => turkishMap[char]) // Türkçe karakterleri map ile değiştiriyoruz
      .toLowerCase() // Hepsini küçük harfe çevir
      .replace(/\s+/g, " ") // Çoklu boşlukları tek boşluğa çevir
      .replace(/ /g, "-") // Boşlukları '-' ile değiştir
      .replace(/[^\w\-]/g, "") // Harf, rakam ve '-' dışındaki karakterleri kaldır
      .replace(/\-\-+/g, "-") // Birden fazla '-' karakterini tek bir '-' ile değiştir
      .replace(/^-+/, "") // Baştaki '-' karakterlerini kaldır
      .replace(/-+$/, ""); // Sondaki '-' karakterlerini kaldır

    return slug;
  };

  return (
    <Link className="no-underline" to={productLink}>
      <div className="flex flex-col items-center w-[239px] h-[615px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-md">
        <img className="w-full h-[427px]" src={images[0].url} alt="" />
        <div className="flex flex-col items-center pl-[25px]  pr-[25px]  pt-[25px]  pb-[35px] gap-[10px]">
          <h5 className="font-bold text-base text-prim">{name} </h5>
          <a className="a-gray" href="/shop">
            {description}
          </a>

          <div className="flex gap-[5px] items-center py-[5px] px-[3px] ">
            <h5 className="font-bold text-base text-[#BDBDBD]">${price}</h5>
            <h5 className="font-bold text-base text-[#23856D]">
              ${(price - price * 0.01).toFixed(2)}
            </h5>
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="rounded-[100%] w-4 h-4 bg-blue"></div>
            <div className="rounded-[100%] w-4 h-4 bg-[#23856D]"></div>
            <div className="rounded-[100%] w-4 h-4 bg-[#E77C40]"></div>
            <div className="rounded-[100%] w-4 h-4 bg-[#252B42]"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
