import ContactCta from "../components/ContactComponents/ContactCta";
import ContactDetail from "../components/ContactComponents/ContactDetail";
import ContactHeader from "../components/ContactComponents/ContactHeader";
import HeaderInnerNav from "../components/LayoutComponents/HeaderInnerNav";

export default function Contact() {
  return (
    <>
      <ContactHeader />
      <ContactDetail />
      <ContactCta />
    </>
  );
}
