export default function TeamHero() {
  return (
    <section className="flex items-center justify-center ">
      <div className="basis-full gap-2 flex  items sm:flex-col h-full">
        <div className="basis-[48%]">
          <img
            className="w-full h-full object-cover"
            src="images/th5.png"
            alt=""
          />
        </div>
        <div className="basis-[48%] flex  gap-2 ">
          <div className="flex  gap-2 flex-col ">
            <img
              className="w-full h-full object-cover"
              src="images/th3.png"
              alt=""
            />
            <img
              className="w-full h-full object-cover"
              src="images/th1.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <img
              className="w-full h-full object-cover"
              src="images/th2.png"
              alt=""
            />
            <img
              className="w-full h-full object-cover"
              src="images/th4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
