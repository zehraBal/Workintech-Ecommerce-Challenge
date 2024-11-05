import ProductCard from "../LayoutComponents/ProductCard";
import { useSelector } from "react-redux";

export default function Products({ products }) {
  return (
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
  );
}
