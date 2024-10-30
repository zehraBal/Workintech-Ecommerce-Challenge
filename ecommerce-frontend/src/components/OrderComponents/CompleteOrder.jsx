import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../../store/Actions/cartActions";
export default function CompleteOrder() {
  const [ccv, setCcv] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const cartSelected = cart.filter((item) => item.checked);
  const address = useSelector((state) => state.cart.address);
  const payment = useSelector((state) => state.cart.payment);
  const subtotal = useSelector((state) => state.cart.cartSubtotal);
  const shipping = useSelector((state) => state.cart.shippingCost);
  const total = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ccv || ccv.length !== 3) {
      setError("Please enter a valid 3-digit CCV");
      return;
    }

    const orderData = {
      address_id: address.id,
      order_date: new Date().toISOString(),
      card_no: payment.card_no,
      card_name: payment.card_name,
      card_expire_month: payment.card_expire_month,
      card_expire_year: payment.card_expire_year,
      card_ccv: ccv,
      price: total,
      products: cartSelected.map((item) => ({
        product_id: item.product.id,
        count: item.count,
        detail: `${item.product.color} - ${item.product.size}`,
      })),
    };

    dispatch(createOrder(orderData));
  };

  return (
    <section className="flex items-center justify-center">
      <div className="basis-[85%] flex items-center justify-center py-28">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Complete Your Order</h2>
          <div className="mb-4">
            <label htmlFor="ccv" className="block mb-2">
              Enter CCV:
            </label>
            <input
              type="text"
              id="ccv"
              value={ccv}
              onChange={(e) => {
                setCcv(e.target.value.replace(/\D/g, "").slice(0, 3));
                setError("");
              }}
              maxLength="3"
              className="w-full px-3 py-2 border rounded"
              placeholder="123"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div className="mb-4">
            <p>Total Amount: ${total.toFixed(2)}</p>
          </div>
          <button type="submit" className="button-primary bg-blue text-white">
            Complete Order
          </button>
        </form>
      </div>
    </section>
  );
}
