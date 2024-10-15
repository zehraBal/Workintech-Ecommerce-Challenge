import BreadCrumbs from "../LayoutComponents/BreadCrumbs";

export default function ShopHeader() {
  return (
    <section className="w-full flex justify-center items-center bg-[#FAFAFA] py-6">
      <div className="w-[85%] flex justify-between items-center flex-wrap sm:w-full sm:flex-col sm:gap-[30px]">
        <div>
          <h2 className="text-2xl font-bold text-prim">Shop</h2>
        </div>
        <div>
          <BreadCrumbs name={"Shop"} address={"/shop"} />
        </div>
      </div>
    </section>
  );
}
