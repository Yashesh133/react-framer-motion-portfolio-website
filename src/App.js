import "./App.css";
import Hero from "./Comonents/Hero/Hero";
import Navbar from "./Comonents/Navbar/Navbar";
import Parallax from "./Comonents/Parallax/Parallax";

function App() {
  return (
    <div>
      <section className="h-screen snap-center" id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section className="h-screen snap-center" id="Services">
        <Parallax type="service" />
      </section>
      <section className="h-screen snap-center">Service</section>
      <section className="h-screen snap-center" id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section className="h-screen snap-center">Portfolio</section>
      <section className="h-screen snap-center">Portfolio2</section>
      <section className="h-screen snap-center">Portfolio3</section>
      <section className="h-screen snap-center " id="Contact">
        Contact
      </section>
    </div>
  );
}

export default App;
