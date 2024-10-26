import OrderAddressForm from "../components/FormComponents/OrderAddressForm";
import OrderAddress from "../components/OrderComponents/OrderAddress";

export default function Order() {
  return (
    <section className="flex items-center justify-center flex-col ">
      <OrderAddress />
      <OrderAddressForm />
    </section>
  );
}
