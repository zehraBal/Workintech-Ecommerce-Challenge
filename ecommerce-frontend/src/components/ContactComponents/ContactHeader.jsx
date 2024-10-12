export default function ContactHeader() {
  return (
    <section className="flex flex-wrap justify-center items-center  sm:flex-col">
      <div className="flex sm:flex-col justify-between items-center basis-[85%] gap-16 py-[112px] w-full sm:py-[60]">
        <article className="flex flex-col items-start justify-center gap-8 relative basis-[45%] sm:w-3/4  sm:items-center sm:text-center  sm:basis-full w-full">
          <h5 className="font-bold text-headerColor">CONTACT US</h5>
          <h5 className="font-bold text-headerColor text-6xl leading-[80px]">
            Get in touch today!
          </h5>
          <h4 className="font-normal text-xl text-secondTextColor">
            We know how large objects will act, but things on a small scale
          </h4>
          <h3 className="text-headerColor font-bold text-2xl">
            Phone : +451 215 215
          </h3>
          <h3 className="text-headerColor font-bold text-2xl">
            Fax : +451 215 215
          </h3>
          <div className="flex items-center text-headerColor text-3xl justify-center"></div>
        </article>

        <article className="relative basis-[45%] min-h-[700px] sm:basis-full sm:min-h-[500px]">
          <img
            className="min-w-[500px] min-h-[700px] sm:min-w-[300px] sm:min-h-[500px]  object-cover"
            src="/images/contact.png"
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
