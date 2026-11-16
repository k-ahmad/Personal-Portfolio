import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
