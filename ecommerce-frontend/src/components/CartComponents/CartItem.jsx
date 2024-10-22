import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import IncrementDecrementButton from "../LayoutComponents/IncDecButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

export default function CartItem({ product, count }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // dispatch(setCartItem({ product, count: count + 1 }));
  };

  const handleDecrement = () => {
    if (count > 1) {
      //   dispatch(setCartItem({ product, count: count - 1 }));
    }
  };

  const handleRemove = () => {
    //   dispatch(removeCartItem(product.id)); // Ürünü sepetten çıkar
  };

  return (
    <section className="flex justify-center items-center">
      <div className="basis-[85%] justify-between items-center">
        <input type="checkbox" />
        <img
          src={product.images[0].url}
          alt={product.name}
          className="w-20 h-20 object-cover"
        />

        <div>
          <h5 className="font-bold">{product.name}</h5>
          <h6 className="text-sm text-gray-600">{product.description}</h6>
        </div>

        {/* Increment/Decrement button */}
        <IncrementDecrementButton
          count={count}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />

        <div>
          <h5 className="text-lg font-bold">
            ${(product.price * count).toFixed(2)}
          </h5>
        </div>

        {/* Delete icon */}
        <FontAwesomeIcon
          icon={faTrashCan}
          style={{ color: "#74C0FC" }}
          onClick={handleRemove} // Sepetten ürünü kaldırma
        />
      </div>
    </section>
  );
}
