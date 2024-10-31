import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAddress, fetchCreditCards } from "../store/Actions/clientActions";
import OrderPageMain from "../components/OrderComponents/OrderPageMain";
import OrderSummaryBox from "../components/CartComponents/OrderSummaryBox";

export default function Order() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAddress());
    dispatch(fetchCreditCards());
  }, [dispatch]);

  return (
    <section className="flex items-center gap-9 justify-center sm:flex-col ">
      <div className="basis-[75%] sm:order-2 sm:basis-full py-28">
        <OrderPageMain />
      </div>
      <OrderSummaryBox />
    </section>
  );
}
