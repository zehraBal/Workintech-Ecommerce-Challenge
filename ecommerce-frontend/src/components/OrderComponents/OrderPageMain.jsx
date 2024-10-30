import { useState } from "react";
import AddressInformation from "./AddressInformation";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import PaymentInformation from "./PaymentInformation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function OrderPageMain() {
  const selectedAddress = useSelector((state) => state.cart.address);
  const selectedPayment = useSelector((state) => state.cart.payment);
  const [showAddress, setShowAddress] = useState(true);
  const [showCreditCard, setShowCreditCard] = useState(false);
  const navigate = useNavigate();
  const onNext = (e) => {
    e.preventDefault(); // Prevent any default form submission

    if (
      !selectedAddress ||
      Object.keys(selectedAddress).length === 0 ||
      !selectedPayment ||
      Object.keys(selectedPayment).length === 0
    ) {
      toast.error("Please select both address and payment method!");
      return;
    } else {
      navigate("/order/complete");
    }

    // Only navigate if both are selected
  };

  return (
    <section className="w-full flex items-center justify-center flex-col py-28">
      <div className="w-full flex items-center justify-between relative">
        <div
          onClick={() => {
            setShowAddress(true);
            setShowCreditCard(false);
          }}
          className="flex w-1/2 border border-solid border-sec flex-col items-start h-36 p-4 cursor-pointer relative"
        >
          <h4
            className={`${showAddress ? "text-blue" : "text-prim"} font-bold`}
          >
            Address Information
          </h4>
          {Object.entries(selectedAddress).length !== 0 && (
            <div>
              <h5 className="text-prim font-bold">{selectedAddress.title}</h5>
              <h6 className="text-sec ">
                {selectedAddress.neighborhood}, {selectedAddress.district}/
                {selectedAddress.city},
              </h6>
            </div>
          )}
          {showAddress && (
            <span className="bg-blue h-2 w-full absolute bottom-0 right-0"></span>
          )}
        </div>

        <div
          onClick={() => {
            setShowCreditCard(true);
            setShowAddress(false);
          }}
          className="flex w-1/2 border border-solid border-sec flex-col items-start h-36 p-4 cursor-pointer relative"
        >
          <h4
            className={`${
              showCreditCard ? "text-blue" : "text-prim"
            } font-bold`}
          >
            Payment Options
          </h4>
          {showCreditCard && (
            <span className="bg-blue h-2 w-full absolute bottom-0 right-0"></span>
          )}
        </div>
      </div>

      {/* AnimatePresence ile Geçiş Animasyonu */}
      <AnimatePresence mode="wait">
        {showAddress && (
          <motion.div
            key="address"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <AddressInformation onNext={onNext} />
          </motion.div>
        )}
        {showCreditCard && (
          <motion.div
            key="creditCard"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <PaymentInformation onNext={onNext} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
