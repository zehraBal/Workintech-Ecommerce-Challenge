import BestSellerCard from "../components/HomePageComponents/BestSellerCard";
import HomeCarousel from "../components/HomePageComponents/HomeCarousel";
import HomeCarouselBottom from "../components/HomePageComponents/HomeCarouselBottom";
import HomeShopCards from "../components/HomePageComponents/HomeShopCards";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <HomeShopCards />
      <HomeCarouselBottom />
    </>
  );
}
