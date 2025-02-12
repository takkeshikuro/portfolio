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

  return (
    <div className="App">
		<StarsCanvas />
		<Banner />
		<div id="home">
			<Home />
		</div>
		<div id="about">
			<About />
		</div>
		<div id="projects">
			<Projects />
		</div>
		<div id="contact">
			<Contact />
		</div>
		<div id="footer">
			<Footer />
		</div>
   </div>
  );
}

export default App;
