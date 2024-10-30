import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function OrderSummaryBox() {
  const isLoggedIn = useSelector((state) => state.client.isLoggedIn);
  const subtotal = useSelector((state) => state.cart.cartSubtotal);
  const shippingCost = useSelector((state) => state.cart.shippingCost);
  const navigate = useNavigate();

  return (
    <section className="w-1/4 flex items-center justify-center flex-col bg-[#FAFAFA] gap-9 p-4 border-2 rounded-md border-solid border-sec shadow-md sm:w-[60%]">
      <div className="w-full flex items-start justify-center gap-4 flex-col">
        <h5 className="text-2xl text-prim font-bold">Order Summary</h5>
        <div className="w-full flex justify-between items-center">
          <h6 className="text-xl text-prim font-bold">Subtotal:</h6>
          <span className="text-xl text-prim font-bold">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="w-full flex justify-between items-center">
          <h6 className="text-xl text-prim font-bold">Shipping:</h6>
          <span className="text-xl text-prim font-bold">$29.99</span>
        </div>
        {subtotal >= 150 && (
          <div className="w-full flex justify-between items-center">
            <h6 className="text-xl text-prim font-bold">
              Free shipping <br />
              over $150:
            </h6>
            <span className="text-xl text-sec font-bold">- $29.99</span>
          </div>
        )}
        <div className="w-full flex justify-between items-center bg-sec bg-opacity-30 py-3 px-2 rounded-md">
          <h6 className="text-xl text-prim font-bold">Total:</h6>
          <span className="text-xl text-prim font-bold">
            ${(shippingCost + subtotal).toFixed(2)}
          </span>
        </div>
      </div>
      <div>
        <button
          className="button-primary bg-blue text-white"
          onClick={() => (isLoggedIn ? navigate("/order") : navigate("/login"))}
        >
          Complete Order
        </button>
      </div>
    </section>
  );
}
