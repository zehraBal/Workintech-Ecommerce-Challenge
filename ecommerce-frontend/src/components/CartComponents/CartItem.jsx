import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import IncrementDecrementButton from "../LayoutComponents/IncDecButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { removeCartItem, setCart } from "../../store/Actions/cartActions";
import { toast } from "react-toastify";

export default function CartItem({ product, count, checked }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(setCart({ product, count: count + 1, checked: true }));
  };

  const handleCheck = () => {
    dispatch(setCart({ product, count, checked: !checked }));
  };

  const handleDecrement = () => {
    if (count > 1) {
      dispatch(setCart({ product, count: count - 1, checked: true }));
    }
  };

  const handleRemove = () => {
    toast.warning("Product removed from cart!");
    dispatch(removeCartItem(product.id));
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[85%] flex justify-between items-center bg-[#FAFAFA] border border-solid border-sec gap-2 sm:flex-col  flex-wrap py-10 px-5 rounded-md">
        <input
          className="w-5 h-5"
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
        />
        <img
          src={product.images[0].url}
          alt={product.name}
          className="w-32 h-32 object-cover border border-solid border-sec rounded-md shadow-sm"
        />

        <div className="w-1/3">
          <h5 className="text-base font-bold">{product.name}</h5>
          <h6 className="text-sm text-sec line-clamp-2">
            {product.description}
          </h6>
        </div>

        {/* Increment/Decrement button */}
        <IncrementDecrementButton
          count={count}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />

        <div>
          <h5 className="text-xl font-bold text-prim">
            ${(product.price * count).toFixed(2)}
          </h5>
        </div>

        <FontAwesomeIcon
          className="cursor-pointer hover:bg-[#D3D3D3] p-2 rounded-full"
          size="xl"
          icon={faTrashCan}
          style={{ color: " #23a6f0" }}
          onClick={handleRemove}
        />
      </div>
    </section>
  );
}
