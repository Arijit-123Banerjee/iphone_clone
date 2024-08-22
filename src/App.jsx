import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Details from "./components/Details";
const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <HeroSection />
      <Highlights />
      <Details />
    </main>
  );
};

export default App;
