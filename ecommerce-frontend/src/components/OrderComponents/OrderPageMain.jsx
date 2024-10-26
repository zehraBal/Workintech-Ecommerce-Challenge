import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddress } from "../../store/Actions/clientActions";
import OrderAddress from "./OrderAddress";
import OrderAddressForm from "../FormComponents/OrderAddressForm";

export default function OrderPageMain() {
  const dispatch = useDispatch();
  const userAdress = useSelector((state) => state.client.addressList);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [billingSameAsDelivery, setBillingSameAsDelivery] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState(null); // Address data for edit mode

  useEffect(() => {
    dispatch(fetchAddress());
  }, [dispatch]);

  const handleAddressSelect = (addressId) => {
    setSelectedAddressId(addressId);
  };

  const handleBillingCheckbox = () => {
    setBillingSameAsDelivery(!billingSameAsDelivery);
  };

  const toggleFormVisibility = (address = null) => {
    setIsFormVisible(!isFormVisible);
    setAddressToEdit(address); // Set address data for edit if provided
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[85%] flex flex-col py-10 gap-6">
        <h2 className="text-lg font-semibold mb-4">Adres Bilgileri</h2>

        <div className="flex items-center gap-4 mb-6">
          <input
            type="checkbox"
            id="billingSameAsDelivery"
            checked={billingSameAsDelivery}
            onChange={handleBillingCheckbox}
          />
          <label htmlFor="billingSameAsDelivery">
            Faturamı Aynı Adrese Gönder
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userAdress.map((address) => (
            <OrderAddress
              key={address.id}
              address={address}
              isSelected={address.id === selectedAddressId}
              onSelect={() => handleAddressSelect(address.id)}
              onEdit={() => toggleFormVisibility(address)} // Open form in edit mode with address data
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

        {isFormVisible && <OrderAddressForm address={addressToEdit} />}

        <button className="mt-6 py-2 px-4 bg-orange-500 text-white font-semibold rounded">
          Kaydet ve Devam Et
        </button>
      </div>
    </section>
  );
}
