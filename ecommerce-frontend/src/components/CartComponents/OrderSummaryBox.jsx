import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function OrderSummaryBox() {
  const isLoggedIn = useSelector((state) => state.client.isLoggedIn);
  const subtotal = useSelector((state) => state.cart.cartSubtotal);
  const shippingCost = useSelector((state) => state.cart.shippingCost);
  const navigate = useNavigate();

  return (
    <section className=" max-w-md  bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-100 px-6 py-4">
        <h5 className="text-2xl font-semibold text-gray-800">Order Summary</h5>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">$29.99</span>
        </div>
        {subtotal >= 150 && (
          <div className="flex justify-between items-center text-green-600">
            <span>Free shipping discount</span>
            <span>- $29.99</span>
          </div>
        )}
        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">Total</span>
            <span className="text-lg font-semibold text-gray-800">
              ${(shippingCost + subtotal).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <button
          className="w-full bg-blue text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => (isLoggedIn ? navigate("/order") : navigate("/login"))}
        >
          Complete Order
        </button>
      </div>
    </section>
  );
}
