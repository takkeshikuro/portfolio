import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StarsCanvas from "./Stars";
import "../styles/App.css";
import Banner from "./Banner";
import Projects from "./Project";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Footer from "./Footer";

function App() {
//   const [sectionIndex, setSectionIndex] = useState(0);
//   const [scrolling, setScrolling] = useState(false); // État pour limiter la vitesse de scroll
//   const sections = ["home", "about", "projects", "resume", "footer"];

//   useEffect(() => {
//     const handleScroll = (e) => {
//       // Bloque le scroll classique si on est déjà en train de scroller
//       if (scrolling) return;

//       e.preventDefault(); // Bloque le scroll classique
//       setScrolling(true); // Bloque le scroll pendant la transition

//       let newIndex = sectionIndex;

//       if (e.deltaY > 0) {
//         newIndex = Math.min(sectionIndex + 1, sections.length - 1); // Scroll vers le bas
//       } else if (e.deltaY < 0) {
//         newIndex = Math.max(sectionIndex - 1, 0); // Scroll vers le haut
//       }

//       if (newIndex !== sectionIndex) {
//         setSectionIndex(newIndex);

//         const nextSection = document.getElementById(sections[newIndex]);
//         if (nextSection) {
//           nextSection.scrollIntoView({ behavior: "smooth" });
//         }
//       }

//       // Définir un délai pour permettre un autre scroll après la transition
//       setTimeout(() => {
//         setScrolling(false);
//       }, 1000); // Le délai peut être ajusté en fonction de la vitesse de transition
//     };

//     window.addEventListener("wheel", handleScroll, { passive: false });
//     return () => window.removeEventListener("wheel", handleScroll);
//   }, [sectionIndex, scrolling]);

  return (
    //<motion.div className="App">
    <div className="App">
		<StarsCanvas />
		<div id="home">
		<Banner />
		<Home />
		</div>
		<div id="about">
		<About />
		</div>
		<div id="projects">
		<Projects />
		</div>
		<div id="resume">
		<Contact />
		</div>
		<div id="footer">
		<Footer />
		</div>
   </div>
  );
}

export default App;
