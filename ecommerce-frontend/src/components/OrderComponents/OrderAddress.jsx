import { useState } from "react";
import OrderAddressForm from "../FormComponents/OrderAddressForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteAddress } from "../../store/Actions/clientActions";

export default function OrderAddress({ address, onSelect, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const selectedAddress = useSelector((state) => state.cart.address);

  const isSelected = selectedAddress?.id === address.id;

  const handleDelete = () => {
    dispatch(deleteAddress(address.id));
  };

  const handleClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      e.stopPropagation();
      return;
    }
    onSelect();
  };

  return (
    <div
      onClick={handleClick}
      className={`rounded p-4 cursor-pointer shadow-md ${
        isSelected ? "border-blue border-2" : "border-sec border"
      }`}
    >
      <div className="flex items-center mb-2">
        <input
          type="radio"
          name="selectedAddress"
          checked={isSelected}
          onChange={() => onSelect()}
          onClick={(e) => e.stopPropagation()}
        />
        <h5 className="ml-2 font-bold text-prim text-2xl">{address.title}</h5>
      </div>
      <div className=" flex items-start flex-col">
        <p className="text-sm text-gray-700">
          <span className="text-base text-prim font-bold">Name: </span>
          {address.name}{" "}
          <span className="text-base text-prim font-bold">Surname: </span>
          {address.surname}
        </p>
        <p className="text-sm text-gray-700">
          <span className="text-base text-prim font-bold">Phone Number: </span>
          {address.phone}
        </p>
        <p className="text-sm text-gray-700">
          <span className="text-base text-prim font-bold">Neighborhood: </span>
          {address.neighborhood}
        </p>
        <p className="text-sm text-gray-700">
          <span className="text-base text-prim font-bold">District: </span>
          {address.district}
        </p>
        <p className="text-sm text-gray-700">
          <span className="text-base text-prim font-bold">City: </span>{" "}
          {address.city}
        </p>
      </div>
      <hr />

      <div className="flex justify-between items-center">
        <button
          className="button-sm bg-blue text-white text-xs"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
        >
          Düzenle
        </button>
        {isOpen && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
              onClose();
            }}
            className="bg-[#EED202] text-white button-sm"
          >
            Cancel
          </button>
        )}
        <button
          className="button-sm bg-[#E74040] text-white text-xs"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
        >
          Sil
        </button>
      </div>
      <hr />
      {isOpen && <OrderAddressForm address={address} />}
    </div>
  );
}
