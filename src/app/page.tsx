import Header from "./components/header/Header";
import ChooseUs from "./sections/chooseUs/ChooseUs";
import Footer from "./sections/footer/Footer";
import HomeSection from "./sections/home/HomeSection";
import Instagram from "./sections/instagram/Instagram";
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
      <Instagram />
      <Footer />
    </div>
  );
}
