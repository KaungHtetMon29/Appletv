import Mainnav from "./components/nav/mainnav";
import Navigation from "./components/nav/nav";
import Footer from "./pages/Footer";
import Hero from "./pages/Home/Hero";
import Slider from "./pages/Home/Slider";
import Ads from "./pages/Home/ads";
import Preview from "./pages/Home/preview";

function Home() {
  return (
    <div className="">
      <Navigation />
      <Mainnav />
      <div className="relative">
        <Hero />
      </div>
      <Preview />

      <Slider />
      <Ads />
      <Footer />
    </div>
  );
}
export default Home;
