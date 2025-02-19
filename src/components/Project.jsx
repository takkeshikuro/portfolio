import '../styles/Projects.css';
import { projects_list } from "../constants";
import { useState, useEffect, useRef } from "react";
import tm from "../assets/github.png";
import GradientText from './GradientText'

function Projects() {
    return (
        <section id="projects" className="project-section">
            <h2> <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class" > My projects </GradientText>
            </h2>
            <div className='project-list'>
                {projects_list.map((project) => ( 
                    <ProjectCard key={project.id} title={project.title} bio={project.bio} gif={project.gif} link={project.link} /> ))}
            </div>
        </section> );
}

function ProjectCard({ title, bio, gif, link }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [lerpPos, setLerpPos] = useState({ x: 0, y: 0 });
	const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // Arrête d'observer une fois visible
                    }
                });
            },
            { threshold: 0.5 } // La carte devient visible quand 20% est affiché
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);


    useEffect(() => {
        let animationFrame;
        const lerp = (start, end, factor) => start + (end - start) * factor;
        const updatePosition = () => {
            setLerpPos((prev) => ({
                x: lerp(prev.x, mousePos.x, 0.15), // Plus bas = traînée plus lente
                y: lerp(prev.y, mousePos.y, 0.15),
            }));
            animationFrame = requestAnimationFrame(updatePosition);
        };
        updatePosition();
        return () => cancelAnimationFrame(animationFrame);
    }, [mousePos]);

    const handleMouseMove = (e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - left,
            y: e.clientY - top,
        });
    };

    return (
        <div ref={cardRef} className={`project-card ${isVisible ? "visible" : "hidden"}`}
			onMouseMove={handleMouseMove}
			style={{
				"--mouse-x": `${lerpPos.x}px`,
				"--mouse-y": `${lerpPos.y}px`, }} >
			<div className="project-card-glow"></div>
			<img src={gif} alt={title} className="project-card-gif" />

            <h3>{title}</h3>
            <p>{bio}</p>
            <a href={link} target="_blank">
                <img src={tm} alt='logo' className='gh_logo'/>
            </a>
        </div> );
}

export default Projects;
