import BottomContainer from "../components/HomePageComponents/BottomContainer";
import HomeCarousel from "../components/HomePageComponents/HomeCarousel";
import HomeCarouselBottom from "../components/HomePageComponents/HomeCarouselBottom";
import HomeShopCards from "../components/HomePageComponents/HomeShopCards";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <HomeShopCards />
      <HomeCarouselBottom />
      <BottomContainer />
    </>
  );
}
