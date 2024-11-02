import { useEffect } from "react";

import { fetchPreviousOrders } from "../../store/Actions/clientActions";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { Accordion } from "react-bootstrap";

export default function OrderHistory() {
  const previousOrders = useSelector((state) => state.client.previousOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPreviousOrders());
  }, [dispatch]);
  // console.log(previousOrders);

  return (
    <section className="flex items-center justify-center">
      <div className=" basis-[85%] flex items-start justify-center flex-col py-28 gap-9 sm:items-center">
        <h2 className="text-prim font-bold">Previous Orders</h2>
        <Accordion className="flex flex-col w-full">
          {previousOrders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}
