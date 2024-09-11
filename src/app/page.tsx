import Header from "./components/header/Header";
import ChooseUs from "./sections/chooseUs/ChooseUs";
import HomeSection from "./sections/home/HomeSection";
import Questions from "./sections/questions/Questions";

export default function Home () {
  return (
    <div className="">
      <Header />
      <HomeSection />
      <ChooseUs />
      <Questions />
    </div>
  );
}
