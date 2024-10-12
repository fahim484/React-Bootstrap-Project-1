import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/shared/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import { FilterAndSearch } from "./components/Filter.jsx";
import { Trending } from "./components/Trending.jsx";
import { BestSelling } from "./components/BestSelling.jsx";
import { Reviews } from "./components/Reviews.jsx";
import { FindVehicles } from "./components/FindVehicles.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FilterAndSearch />
      <Trending />
      <BestSelling />
      <Reviews />
      <FindVehicles />
      <Footer />
    </main>
  );
}

export default App;
