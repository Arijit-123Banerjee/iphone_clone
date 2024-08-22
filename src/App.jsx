import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <HeroSection />
      <Highlights />
    </main>
  );
};

export default App;
