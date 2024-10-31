import { Table } from "react-bootstrap";
import ProductRow from "./ProductRow";

export default function OrderDetails({ order }) {
  return (
    <div>
      <h5>Order Details</h5>
      <p>
        <strong>Date:</strong> {new Date(order.order_date).toLocaleString()}
        <br />
        <strong>Total Price:</strong> ${order.price.toFixed(2)}
        <br />
        <strong>Card Holder:</strong> {order.card_name}
      </p>

      {/* Table of products in the order */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {order.products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
