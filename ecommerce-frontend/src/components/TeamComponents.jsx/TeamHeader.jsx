import BreadCrumbs from "../LayoutComponents/BreadCrumbs";

export default function TeamHeader() {
  return (
    <section className="flex flex-wrap justify-center items-center">
      <div className="basis-3/5 flex flex-col items-center justify-center flex-wrap  py-[50px]">
        <h5 className="font-bold text-[#737373] text-base text-center">
          WHAT WE DO
        </h5>
        <h2 className="font-bold text-[#252B42] text-center text-[58px] leading-[80px]">
          Innovation tailored for you
        </h2>
        <BreadCrumbs name={"Team"} address={"/team"} />
      </div>
    </section>
  );
}
