import BestSellerSection from "../LayoutComponents/BestSellerSection";

export default function DetailBestSellers() {
  return (
    <section className="flex justify-center items-center bg-[#FAFAFA]">
      <div className="basis-[75%] flex-col items-center flex-wrap py-12 ">
        <h3 className="text-2xl font-bold text-prim pb-6 sm:text-center">
          BESTSELLER PRODUCTS
        </h3>
        <hr className="pb-6 text-sec" />
        <BestSellerSection />
      </div>
    </section>
  );
}
