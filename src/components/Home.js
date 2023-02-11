import TopNav from "../components/TopNav";
import Header from "../components/Nav";
import HeroCarousel from "../components/Carousel";

function Home() {
  return (
    <>
      <TopNav />
      <Header />
      <HeroCarousel />

      <div>
        <h1>Home</h1>
      </div>
    </>
  );
}

export default Home;
