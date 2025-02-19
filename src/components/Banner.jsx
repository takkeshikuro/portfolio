import '../styles/Banner.css';
import tm from '../assets/www_logo.png';
import GradientText from './GradientText'

function Banner() {
	let title = "Theo Takeshi Morikawa";
	
		return (<div className='port-banner'>
		<header>
			<div className="logo-title">
                <a href="#home">
                    <img src={tm} alt='logo' className='banner_logo'/>
                </a>
				<h1> <GradientText
					colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
					animationSpeed={3}
					showBorder={false}
					className="custom-class" > {title} </GradientText>
                </h1>
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

