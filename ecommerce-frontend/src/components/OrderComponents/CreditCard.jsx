import { useState } from "react";
import CreditCardForm from "../FormComponents/CreditCardForm";
import { useDispatch } from "react-redux";
import { deleteCreditCard } from "../../store/Actions/clientActions";

export default function CreditCard({ card, isSelected, onSelect, onClose }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCreditCard(card.id));
  };

  const [isOpen, setIsOpen] = useState(false);

  const maskCardNumber = (cardNo) => {
    return cardNo.slice(0, 6) + "******" + cardNo.slice(-4);
  };

  return (
    <div
      onClick={onSelect}
      className={`border rounded p-4 cursor-pointer ${
        isSelected ? "border-blue" : "border-sec"
      }`}
    >
      <div className="flex items-center mb-2">
        <input
          type="radio"
          name="selectedCard"
          checked={isSelected}
          onChange={onSelect}
        />
        <h5 className="ml-2 font-bold text-prim text-2xl">
          {card.name_on_card}
        </h5>
      </div>

      <div
        className="bg-gray-100 p-4 rounded-lg mb-4"
        style={{ fontFamily: "monospace" }}
      >
        <p className="text-xl mb-4">{maskCardNumber(card.card_no)}</p>
        <p className="text-sm">{`${card.expire_month
          .toString()
          .padStart(2, "0")}/${card.expire_year}`}</p>
      </div>

      <hr />
      <div className="flex justify-between items-center mt-4">
        <button
          className="button-sm bg-blue text-white text-xs"
          onClick={() => setIsOpen(true)}
        >
          Edit
        </button>
        {isOpen && (
          <button
            onClick={() => {
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
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <hr />
      {isOpen && <CreditCardForm card={card} />}
    </div>
  );
}
