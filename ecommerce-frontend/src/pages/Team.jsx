import HeaderInnerNav from "../components/HeaderInnerNav";
import TeamCta from "../components/TeamComponents.jsx/TeamCta";
import TeamHeader from "../components/TeamComponents.jsx/TeamHeader";
import TeamHero from "../components/TeamComponents.jsx/TeamHero";
import TeamMembers from "../components/TeamComponents.jsx/TeamMembers";

export default function Team() {
  return (
    <>
      <HeaderInnerNav />
      <TeamHeader />
      <TeamHero />
      <TeamMembers />
      <TeamCta />
    </>
  );
}
