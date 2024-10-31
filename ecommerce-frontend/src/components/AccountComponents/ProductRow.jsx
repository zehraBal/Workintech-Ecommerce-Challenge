import { Image } from "react-bootstrap";

export default function ProductRow({ product }) {
  return (
    <tr>
      <td>
        <Image
          src={product.images[0]?.url || "https://via.placeholder.com/50"}
          alt={product.name}
          thumbnail
          style={{ width: 50 }}
        />
      </td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>${product.price.toFixed(2)}</td>
      <td>{product.count}</td>
    </tr>
  );
}
