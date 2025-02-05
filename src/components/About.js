import '../styles/About.css';
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";


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
			<h2>My TechStack</h2>
			<div className="tech-container">
				{technologies.map((tech) => (
					<motion.div
						className='tech-card'
						key={tech.name}
						onMouseEnter={() => setActiveCard(tech.name)}   // Démarre l'animation
                        onMouseLeave={() => setActiveCard(null)}        // Stoppe l'animation quand la souris quitte
						onClick={() => setSelectedTech(tech)} // Ouvre le modal sur le clic
                        animate={activeCard === tech.name ? hoverAnimation : { scale: 1, rotate: 0, borderRadius: "0%" }}>
						<img src={tech.icon} alt='logo' className='card-logo'/>
					</motion.div>
				))}
			</div>
			{selectedTech && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setSelectedTech(null)} // Ferme le modal au clic sur l'overlay
                >
                    <motion.div
                        className="modal-content"
                        {...modalAnimation} // Animation du contenu du modal
                        onClick={(e) => e.stopPropagation()} // Evite la fermeture en cliquant à l'intérieur
                    >
                        <button className="close-btn" onClick={() => setSelectedTech(null)}>✖</button>
                        <h2>{selectedTech.name}</h2>
						<button className='doc-btn' >
							<a href={selectedTech.link} target="_blank" rel="noopener noreferrer">
            				Documentation</a>
						</button>
                        <p>{selectedTech.bio || "No description available."}</p>
                    </motion.div>
                </motion.div>
            )}
		</div>
	);
}

function About() {
	return (
		<section id="about" className='About-section'>
			<h2>About me,</h2>
				<p className='about-text'> Hi, I’m Theo, a recent graduate from École 42 (School 42), based in Paris.<br/>
					I’m currently looking for an internship where I can apply my skills, 
					learn new things, and contribute to impactful projects.<br/>
					What drives me is my natural curiosity and versatility, I like to think of myself 
					as a Swiss Army knife.<br/>
					I thrive in environments where I can solve problems, learn from others, and push the boundaries 
					of my knowledge. Whether it’s building projects, analyzing systems, or discovering new technologies.<br/>
					If you’re looking for someone resourceful, adaptable, and genuinely passionate about tech, let’s connect !
				</p>
				<Stack />
		</section>
	)
}

export default About;