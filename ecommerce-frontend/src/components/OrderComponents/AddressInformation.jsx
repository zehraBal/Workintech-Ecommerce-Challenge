import OrderAddress from "./OrderAddress";
import OrderAddressForm from "../FormComponents/OrderAddressForm";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setSelectedAddress } from "../../store/Actions/cartActions";

export default function AddressInformation({ onNext }) {
  const userAdress = useSelector((state) => state.client.addressList);
  //console.log("userAdress", userAdress);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState(null); // Address data for edit mode
  const dispatch = useDispatch();
  const handleAddressSelect = (addressId) => {
    const selectedAddress = userAdress.find(
      (address) => address.id === addressId
    );
    if (selectedAddress) {
      dispatch(setSelectedAddress(selectedAddress));
    }
  };

  const toggleFormVisibility = (userAddress = null) => {
    setIsFormVisible(!isFormVisible);
    setAddressToEdit(userAddress);
  };
  const handleFormClose = () => {
    setIsFormVisible(false);
    setAddressToEdit(null);
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[85%] flex flex-col py-10 gap-6 relative">
        <h2 className="text-3xl mb-9">Adres Bilgileri</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userAdress.map((address) => (
            <OrderAddress
              key={address.id}
              address={address}
              onSelect={() => handleAddressSelect(address.id)}
              onEdit={() => toggleFormVisibility(address)}
              onCancel={handleFormClose}
            />
          ))}

          {/* Add new address card */}
          <div
            className="border-dashed border-2 border-gray-300 rounded p-4 flex items-center justify-center cursor-pointer"
            onClick={() => toggleFormVisibility()} // Open form without data for new address
          >
            <span className="text-gray-500">+ Yeni Adres Ekle</span>
          </div>
        </div>

        {isFormVisible && (
          <OrderAddressForm address={addressToEdit} onClose={handleFormClose} />
        )}

        <button className="mt-6 py-2 px-4 bg-orange-500 text-white font-semibold rounded">
          Kaydet ve Devam Et
        </button>

        <div className="absolute bottom-0 right-0 ">
          <button
            onClick={onNext}
            className="bg-blue text-white button-primary flex items-center"
          >
            Next <span className="arrow-right-white"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
