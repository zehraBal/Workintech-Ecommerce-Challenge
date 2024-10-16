import PricingHeader from "../components/PricingComponents/PricingHeader";
import PricingDetails from "../components/PricingComponents/PricingDetails";
import Clients from "../components/PricingComponents/Clients";
import FAQ from "../components/PricingComponents/FAQ";
import PricingCta from "../components/PricingComponents/PricingCta";
import HeaderInnerNav from "../components/LayoutComponents/HeaderInnerNav";

export default function Pricing() {
  return (
    <>
      <PricingHeader />
      <PricingDetails />
      <Clients />
      <FAQ />
      <PricingCta />
    </>
  );
}
