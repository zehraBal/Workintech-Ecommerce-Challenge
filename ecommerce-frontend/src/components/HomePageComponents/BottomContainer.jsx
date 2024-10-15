export default function BottomContainer() {
  return (
    <section className="flex justify-center items-center flex-wrap">
      <div className="flex  items-center gap-[30px] flex-wrap sm:flex-col">
        <div className="w-[55%]">
          <img
            className="w-full h-full object-cover "
            src="images/hero2.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[30px] items-start">
          <h5 className="text-base font-bold text-[#BDBDBD]">SUMMER 2020</h5>
          <h1 className="text-[40px] leading-[50px] font-bold text-prim">
            Part of the Neural Universe
          </h1>
          <h4 className="text-xl text-sec">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex items-center gap-[10px]">
            <button className="button-md bg-green text-white">BUY NOW</button>
            <button className="button-md bg-white text-green">READ ME</button>
          </div>
        </div>
      </div>
    </section>
  );
}
