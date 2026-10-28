import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Ai from "./components/Ai.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Nav open={menuOpen} onToggle={() => setMenuOpen((open) => !open)} onNavigate={() => setMenuOpen(false)} />
      <div className="page">
        <Hero />
      </div>
      <Ai />
      <div className="page">
        <Experience />
        <Skills />
        <Work />
        <Contact />
      </div>
    </>
  );
}
