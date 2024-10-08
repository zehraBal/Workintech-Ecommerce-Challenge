import ClientCard from "../ClientCard";

export default function Clients() {
  return (
    <section className="flex flex-wrap items-center justify-center bg-[#FAFAFA]">
      <div className="basis-[70%] py-[80px] flex flex-col  items-center justify-center">
        <h2 className=" text-xl  text-[#252B42]">
          Trusted By Over 4000 Big Companies
        </h2>
        <ClientCard />
      </div>
    </section>
  );
}
