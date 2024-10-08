import Clients from "../components/AboutUsComponents/AboutUsClients";
import AboutUsHeader from "../components/AboutUsComponents/AboutUsHeader";
import TeamSection from "../components/AboutUsComponents/AboutUsTeam";
import VideoCard from "../components/AboutUsComponents/AboutUsVideoCard";
import Content from "../components/AboutUsComponents/Content";
import Stats from "../components/AboutUsComponents/Stats";
import Testimonial from "../components/AboutUsComponents/Testimonial";

export default function AboutUs() {
  return (
    <>
      <AboutUsHeader />
      <Content />
      <Stats />
      <VideoCard />
      <TeamSection />
      <Clients />
      <Testimonial />
    </>
  );
}
