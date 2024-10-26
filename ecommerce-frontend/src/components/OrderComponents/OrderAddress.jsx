import { useState } from "react";
import OrderAddressForm from "../FormComponents/OrderAddressForm";
import { useDispatch } from "react-redux";
import { deleteAddress } from "../../store/Actions/clientActions";

export default function OrderAddress({ address, isSelected, onSelect }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteAddress(address.id));
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={onSelect}
      className={`border rounded p-4 cursor-pointer ${
        isSelected ? "border-orange-500" : "border-gray-300"
      }`}
    >
      <div className="flex items-center mb-2">
        <input
          type="radio"
          name="selectedAddress"
          checked={isSelected}
          onChange={onSelect}
        />
        <h5 className="ml-2 font-semibold">{address.title}</h5>
      </div>

      <p className="text-sm text-gray-700">
        {address.name} {address.surname}
      </p>
      <p className="text-sm text-gray-700">{address.phone}</p>
      <p className="text-sm text-gray-700">{address.neighborhood}</p>
      <p className="text-sm text-gray-700">
        {address.district}, {address.city}
      </p>

      <button
        className="mt-2 text-orange-500 text-xs"
        onClick={() => setIsOpen(!isOpen)}
      >
        Düzenle
      </button>
      <button onClick={handleDelete}> Sil</button>
      {isOpen && <OrderAddressForm address={address} />}
    </div>
  );
}
