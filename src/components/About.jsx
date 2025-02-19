import '../styles/About.css';
import { technologies, about_text } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import tm from "../assets/42.png";
import GradientText from './GradientText'

function Stack() {

	const [activeCard, setActiveCard] = useState(null);
	const [selectedTech, setSelectedTech] = useState(null);

	const hoverAnimation = {
        scale: [1, 1.5, 1],
        rotate: [0, 0, 360, 360, 0],
		borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        }
    };

	const modalAnimation = {initial: { opacity: 0, y: -50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -50 },
	transition: { duration: 0.4, ease: "easeInOut" }
	};
	
	return (
		<div id="stack" className='stack-list'>
			<h2> <GradientText
				colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
				animationSpeed={3}
				showBorder={false}
				className="custom-class" > My Techstack </GradientText>
			</h2>
			<div className="tech-container"> {technologies.map((tech) => (
				<motion.div
					className='tech-card'
					key={tech.name}
					onMouseEnter={() => setActiveCard(tech.name)}   // Démarre l'animation
					onMouseLeave={() => setActiveCard(null)}        // Stoppe l'animation quand la souris quitte
					onClick={() => setSelectedTech(tech)} // Ouvre le modal sur le clic
					animate={activeCard === tech.name ? hoverAnimation : { scale: 1, rotate: 0, borderRadius: "0%" }}>
					<img src={tech.icon} alt='logo' className='card-logo'/>
				</motion.div> ))}
			</div> 
			{selectedTech && (
			<motion.div
				className="modal-overlay"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.4 }}
				onClick={() => setSelectedTech(null)} >
				<motion.div className="modal-content"
					{...modalAnimation} // Animation du contenu du modal
					onClick={(e) => e.stopPropagation()} >
						<button className="close-btn" onClick={() => setSelectedTech(null)}>✖</button>
						<h2>{selectedTech.name}</h2>
						<button className='doc-btn' >
							<a href={selectedTech.link} target="_blank" rel="noopener noreferrer">Documentation</a>
						</button>
						<p>{selectedTech.bio || "No description available."}</p>
				</motion.div>
            </motion.div> )}
		</div>
	);
}

function About() {
	return (
		<section id="about" className='About-section'>
			<div className='about-line'>
				<h2>
					<GradientText
						colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
						animationSpeed={3}
						showBorder={false}
						className="custom-class" >About me, </GradientText>
				</h2>
				<a href="https://42.fr/" target="_blank">
                    <img src={tm} alt='logo' className='about_logo'/>
                </a>
			</div>
			<p className='about-text'> {about_text.map((line, index) => (
				<span key={index}> {line.split("").map((char, index) => (
					<motion.span
						key={index}
						className="letter"
						initial={{ color: "rgb(8, 6, 6)" }} 
						animate={{ color: "rgb(255, 249, 249)" }}
						whileHover={{
							color: ["rgb(19, 15, 109)", "rgb(242, 242, 242)"], // Gris -> Blanc
							scale: 1.1,
							transition: { duration: 0.3, ease: "easeInOut" }}} > {char === " " ? "\u00A0" : char} {/* Garde les espaces visibles */}
					</motion.span> ))}
					<br />
				</span> ))}
			</p>
			<Stack />
		</section> )
}

export default About;