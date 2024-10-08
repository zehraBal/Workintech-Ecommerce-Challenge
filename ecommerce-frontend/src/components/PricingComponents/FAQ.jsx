import FAQCard from "./FAQCard";

export default function FAQ() {
  return (
    <section className="flex flex-wrap items-center justify-center">
      <div className="basis-[70%] flex flex-col items-center   gap-[50px] py-[80px]">
        <div className="w-full py-[45px] flex flex-col flex-wrap items-center justify-center gap-[10px]">
          <h2 className="text-[40px] leading-[50px]">Pricing FAQs</h2>
          <p className="text-xl text-center text-[#737373]">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {/*row1 */}
          <div className="flex flex-wrap w-full  gap-[30px]">
            <FAQCard />
            <FAQCard />
          </div>
          {/*row2 */}
          <div className="flex flex-wrap w-full  gap-[30px]">
            <FAQCard />
            <FAQCard />
          </div>
          {/*row3 */}
          <div className="flex flex-wrap w-full  gap-[30px]">
            <FAQCard />
            <FAQCard />
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-center text-[#737373]">
            Haven’t got your answer? Contact our support
          </p>
        </div>
      </div>
    </section>
  );
}
