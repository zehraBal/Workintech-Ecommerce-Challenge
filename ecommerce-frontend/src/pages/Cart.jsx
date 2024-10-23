import { useSelector } from "react-redux";
import CartItem from "../components/CartComponents/CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart); // Sepet verisini Redux'tan al
  console.log(cart);

  return (
    <section className="flex flex-col items-center gap-5 py-28">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

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
    </section>
  );
}
