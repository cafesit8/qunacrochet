import Header from "./components/header/Header";
import ChooseUs from "./sections/chooseUs/ChooseUs";
import HomeSection from "./sections/home/HomeSection";
import Questions from "./sections/questions/Questions";
import Reviews from "./sections/reviews/Reviews";

export default function Home () {
  return (
    <div className="">
      <Header />
      <HomeSection />
      <ChooseUs />
      <Reviews />
      <Questions />
    </div>
  );
}
