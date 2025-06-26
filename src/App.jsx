import AboutMe from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/Projects";


function  App() {
  return (
    <>
      <Header />
      <Hero />
      <div id="about"><AboutMe /></div>
      <div id="work"><ProjectShowcase /></div>
      <div id="gal"><Gallery /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}

export default App;