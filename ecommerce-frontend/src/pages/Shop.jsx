import ShopHeader from "../components/ShopComponents/ShopHeader";
import ShopCategories from "../components/ShopComponents/ShopCategories";
import Products from "../components/ShopComponents/Products";
import ClientCard from "../components/LayoutComponents/ClientCard";

export default function Shop() {
  return (
    <section className="flex items-center justify-center flex-col h-screen ">
      <ShopHeader />
      <ShopCategories />
      <Products />
      <ClientCard />
    </section>
  );
}
