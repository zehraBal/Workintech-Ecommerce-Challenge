import TeamCard from "../AboutUsComponents/TeamCard";

export default function TeamMembers() {
  const paths = [
    "images/user1.png",
    "images/user2.png",
    "images/user3.png",
    "images/team1.png",
    "images/user4.png",
    "images/team2.png",
    "images/team3.png",
    "images/user5.png",
    "images/user6.png",
  ];
  const groupedPaths = [];
  for (let i = 0; i < paths.length; i += 3) {
    groupedPaths.push(paths.slice(i, i + 3));
  }

  return (
    <section className="flex items-center justify-center flex-wrap">
      <div className="basis-[70%] flex flex-col items-center justify-center py-[112px] gap-[112px]">
        <div className="w-3/5 text-center">
          <h2 className="font-bold text-[40px] leading-[50px] text-[#252B42]">
            Meet Our Team
          </h2>
        </div>
        {groupedPaths.map((group, index) => (
          <div
            key={index}
            className="flex flex-wrap gap-8 justify-center sm:flex-col"
          >
            {group.map((path, i) => (
              <TeamCard key={i} profilePicture={path} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
