import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Skill from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}

export default App;
