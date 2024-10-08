export default function Content() {
  return (
    <section className=" flex items-center justify-center py-6  flex-wrap sm:flex-col ">
      <div className="basis-[70%] gap-[60px] flex  items-center justify-between sm:flex-col sm:basis-full">
        <div className="w-1/3  flex flex-col items-start justify-center py-6 gap-10 sm:w-full sm:items-center">
          <div className=" leading-7 text-[#E74040] text-start ">
            Problems trying
          </div>
          <div className=" font-bold text-2xl text-[#252B42] sm:text-center">
            Met minim Mollie non desert <br />
            Alamo est sit cliquey dolor do <br />
            met sent.
          </div>
        </div>
        <div className="w-2/3 h-max space-y-12 flex text-start  mt-10 sm:items-center">
          <p className="leading-7  text-[#737373] ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
    </section>
  );
}
