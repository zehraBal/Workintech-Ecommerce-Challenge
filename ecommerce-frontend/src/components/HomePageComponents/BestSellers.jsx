import BestSellerSection from "../LayoutComponents/BestSellerSection";

export default function BestSellers() {
  return (
    <section className="w-full flex flex-wrap justify-center items-center flex-col">
      <div className="w-[85%] flex flex-col gap-20 py-20 sm:w-full">
        <div className="flex flex-col gap-[10px] items-center">
          <h2 className="text-sec text-xl">Featured Products</h2>
          <h3 className="text-prim font-bold text-2xl">BESTSELLER PRODUCTS</h3>
          <p className="text-sec text-sm">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <BestSellerSection />
      </div>
    </section>
  );
}
