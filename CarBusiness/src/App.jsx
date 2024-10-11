import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./components/shared/Navbar.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
