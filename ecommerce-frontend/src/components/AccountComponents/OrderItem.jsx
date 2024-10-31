import { Accordion } from "react-bootstrap";
import OrderDetails from "./OrderDetails";

export default function OrderItem({ order }) {
  return (
    <Accordion.Item eventKey={order.id.toString()}>
      <Accordion.Header>
        Order #{order.id} - {new Date(order.order_date).toLocaleDateString()}
      </Accordion.Header>
      <Accordion.Body>
        <OrderDetails order={order} />
      </Accordion.Body>
    </Accordion.Item>
  );
}
