import ClientCard from "../LayoutComponents/ClientCard";

export default function Clients() {
  return (
    <section className="flex justify-center items-center bg-[#FAFAFA] ">
      <div className="basis-[70%] flex flex-col items-center gap-6 py-[80px]">
        <article className="w-3/5 flex items-center justify-center flex-col gap-[30px]">
          <h2 className="font-bold text-[#252B42] text-[40px] leading-[50px] text-center">
            Big Companies Are Here
          </h2>
          <p className="text-[#737373] text-lg text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </article>
        <ClientCard />
      </div>
    </section>
  );
}
