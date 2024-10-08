export default function AboutUsHeader() {
  return (
    <section className="flex flex-wrap justify-center items-center pb-10 sm:flex-col ">
      <div className="flex sm:flex-col justify-between items-center basis-[85%] gap-16 py-[112px] sm:py-[80px]">
        <article className="flex flex-col items-start justify-center gap-8 relative basis-[45%] sm:w-3/4  sm:items-center sm:text-center  sm:basis-full w-full">
          <h5 className="font-bold text-headerColor">ABOUT COMPANY</h5>
          <h1 className="font-bold text-[58px] leading-[80px] text-secondTextColor">
            ABOUT US
          </h1>
          <h4 className="text-[#737373] font-bold text-[20px] leading-[30px]">
            We know how large objects will act,
            <br /> but things on a small scale
          </h4>
          <div>
            <button className="button-primary bg-[#23A6F0] text-white">
              Get Quote Now
            </button>
          </div>
        </article>

        <article className="relative basis-[45%] min-h-[700px] sm:basis-full sm:min-h-[500px]">
          <img
            className="min-w-[400px] min-h-[600px] sm:min-w-[300px] sm:min-h-[400px]  object-cover"
            src="/images/about.png"
            alt="Contact"
          />
          <div className="bg-[#977DF4] w-[3%] aspect-square rounded-full absolute left-[-1%] bottom-[40%]"></div>
          <div className="bg-[#977DF4] w-[3%] aspect-square rounded-full absolute right-0 top-[22%]"></div>
          <div className="bg-[#FFE9EA] w-[6%] aspect-square rounded-full absolute right-[2%] top-[38%]"></div>
          <div className="bg-[#FFE9EA] w-[14%] aspect-square rounded-full absolute left-[-6%] top-[5%]"></div>
          <div className="bg-[#FFE9EA] w-[85%] aspect-square rounded-full absolute left-[5%] top-0 z-[-1]"></div>
        </article>
      </div>
    </section>
  );
}
