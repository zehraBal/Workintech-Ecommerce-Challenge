import { useSelector } from "react-redux";
import CartItem from "../components/CartComponents/CartItem";
import OrderSummaryBox from "../components/CartComponents/OrderSummaryBox";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const itemCount = cart.reduce((total, item) => total + item.count, 0);
  const total = cart
    .filter((item) => item.checked) // Only include items where checked is true
    .reduce((sum, item) => sum + item.product.price * item.count, 0);

  return (
    <section className="flex flex-col items-center  py-28">
      <div className="w-full flex items-start gap-5 justify-around sm:flex-col sm:items-center">
        <div className="w-3/5 flex flex-col  items-center justify-center gap-5">
          <h2 className="text-2xl font-bold mb-4">
            Shopping Cart{" "}
            <span className="text-lg text-sec">{`(Total of ${itemCount} products )`}</span>
          </h2>

          {/* Eğer sepet boşsa */}
          {cart.length === 0 ? (
            <p className="text-lg">Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <CartItem
                key={index}
                product={item.product}
                count={item.count}
                checked={item.checked}
              />
            ))
          )}
        </div>

        <OrderSummaryBox total={total.toFixed(2)} />
      </div>
    </section>
  );
}
