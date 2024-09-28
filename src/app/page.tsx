import ChooseUs from "./sections/chooseUs/ChooseUs";
import HomeSection from "./sections/home/HomeSection";
import Instagram from "./sections/instagram/Instagram";
import Questions from "./sections/questions/Questions";
import Reviews from "./sections/reviews/Reviews";

export default function Home () {
  return (
    <>
      <HomeSection />
      <ChooseUs />
      <Reviews />
      <Questions />
      <Instagram />
    </>
  );
}
