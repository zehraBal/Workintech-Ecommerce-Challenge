import CreditCard from "./CreditCard";
import CreditCardForm from "../FormComponents/CreditCardForm";
import InstallmentOptions from "./InstallmentOptions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setPayment, setInstallment } from "../../store/Actions/cartActions";

export default function PaymentInformation() {
  const userCards = useSelector((state) => state.client.creditCards);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const cartSubtotal = useSelector((state) => state.cart.cartSubtotal);
  const shippingCost = useSelector((state) => state.cart.shippingCost);
  const cartTotal = cartSubtotal + shippingCost;

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [cardToEdit, setCardToEdit] = useState(null);
  const dispatch = useDispatch();

  const handleCardSelect = (cardId) => {
    const selectedCard = userCards.find((card) => card.id === cardId);
    setSelectedCardId(cardId);
    if (selectedCard) {
      dispatch(setPayment(selectedCard));
    }
  };

  const handleInstallmentSelect = (installmentCount) => {
    dispatch(setInstallment(installmentCount));
  };

  const toggleFormVisibility = (userCard = null) => {
    setIsFormVisible(!isFormVisible);
    setCardToEdit(userCard);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
    setCardToEdit(null);
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[85%] flex flex-col py-10 gap-6 ">
        <h2 className="text-3xl mb-9">Payment Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userCards.map((card) => (
            <CreditCard
              key={card.id}
              card={card}
              isSelected={card.id === selectedCardId}
              onSelect={() => handleCardSelect(card.id)}
              onEdit={() => toggleFormVisibility(card)}
              onClose={handleFormClose}
            />
          ))}

          {/* Add new card card */}
          <div
            className="border-dashed border-2 border-gray-300 rounded p-4 flex items-center justify-center cursor-pointer"
            onClick={() => toggleFormVisibility()}
          >
            <span className="text-gray-500">+ Add New Card</span>
          </div>
        </div>

        {isFormVisible && (
          <CreditCardForm card={cardToEdit} onClose={handleFormClose} />
        )}

        {selectedCardId && (
          <InstallmentOptions
            total={cartTotal}
            onSelect={handleInstallmentSelect}
          />
        )}

        <button className="mt-6 py-2 px-4 bg-orange-500 text-white font-semibold rounded">
          Save and Continue
        </button>
      </div>
    </section>
  );
}
