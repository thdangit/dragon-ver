import "../src/css/header.css";
import "../src/css/carousel.css";
import Header from "./components/Header";
import Carousel from "./pages/Carousel";
import About from "./pages/About";
import Number from "./pages/Number";
import Develop from "./pages/Develop";
import Roadmap from "./pages/Roadmap";
import Ourteam from "./pages/Ourteam";
import Faq from "./pages/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <About />
      <Develop />
      <Roadmap />
      <Number />
      <Ourteam />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
