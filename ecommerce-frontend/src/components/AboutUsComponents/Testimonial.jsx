export default function Testimonial() {
  return (
    <section className="flex flex-wrap justify-center items-center h-full">
      <div className="basis-[60%] h-full flex items-center justify-center bg-[#2A7CC7] sm:basis-full py-[112px]">
        <article className="w-2/5 flex flex-col justify-between gap-6 items-start text-white sm:items-center">
          <h5 className="font-bold text-base sm:text-center">WORK WITH US</h5>
          <h2 className="font-bold text-[40px] leading-[50px] sm:text-center">
            Now Let’s grow Yours
          </h2>
          <p className="text-sm text-left sm:text-center">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <div>
            <button className="button-md border-[#FAFAFA]">Button</button>
          </div>
        </article>
      </div>
      <div className="basis-[40%] h-full sm:hidden">
        <img
          className="w-full h-full object-cover"
          src="images/testimonial.png"
          alt=""
        />
      </div>
    </section>
  );
}
