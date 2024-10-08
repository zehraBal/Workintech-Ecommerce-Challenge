import TeamCard from "./TeamCard";

export default function TeamSection() {
  return (
    <section className="flex  flex-wrap justify-center items-center">
      <div className="basis-[70%] flex items-center justify-center py-[112px] gap-[112px] flex-col ">
        <article className="w-3/5 flex flex-col items-center justify-center">
          <h2 className="text-[#252B42] font-bold text-[40px] leading-[50px]">
            Meet Our Team
          </h2>
          <p className="text-[#737373] text-lg text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </article>
        <div className="w-full flex flex-wrap items-center justify-between gap-[30px] sm:justify-center sm:flex-col">
          <TeamCard profilePicture={"images/team1.png"} />
          <TeamCard profilePicture={"images/team2.png"} />
          <TeamCard profilePicture={"images/team3.png"} />
        </div>
      </div>
    </section>
  );
}
