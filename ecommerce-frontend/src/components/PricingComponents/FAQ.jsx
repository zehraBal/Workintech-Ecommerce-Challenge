import FAQCard from "./FAQCard";

export default function FAQ() {
  return (
    <section className="w-screen flex items-center justify-center">
      <div className="w-[1050px] flex flex-col  gap-[50px] py-[80px]">
        <div className="w-full h-[210px] flex items-center justify-center">
          <div className="flex flex-col items-center justify-between gap-3">
            <h2>Pricing FAQs</h2>
            <p className="text-xl text-center text-[#737373]">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          {/*row1 */}
          <div className="flex w-full h-[160px] gap-[30px]">
            <FAQCard />
            <FAQCard />
          </div>
          {/*row2 */}
          <div className="flex w-full h-[160px] gap-[30px]">
            <FAQCard />
            <FAQCard />
          </div>
          {/*row3 */}
          <div className="flex w-full h-[160px] gap-[30px]">
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
