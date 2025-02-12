import '../styles/Banner.css';
import tm from '../assets/www_logo.png';
import { motion } from "framer-motion";

function Banner() {
	let title = "Theo Morikawa";
	return (<div className='port-banner'>
		<header>
			<div className="logo-title">
                <a href="#home">
                    <img src={tm} alt='logo' className='banner_logo'/>
                </a>
				<h1>{title.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        className="letter"
                        initial={{ color: "rgb(99, 51, 240)" }} 
                        animate={{ color: "rgb(99, 51, 240)" }}
                        whileHover={{
                            color: ["rgb(204, 201, 187)", "rgb(227, 227, 121)"], // Gris -> Blanc
                            scale: 1.1,
                            transition: { duration: 0.3, ease: "easeInOut" }
                        }}
                    >
                        {char === " " ? "\u00A0" : char} {/* Garde les espaces visibles */}
                    </motion.span>
                ))}</h1>
			</div>
			<nav>
		  		<a href="#about">About</a>
		  		<a href="#projects">Projects</a>
		  		<a href="#Contact">Contact</a>
			</nav>
	  	</header>
	</div>);
};

export default Banner;

