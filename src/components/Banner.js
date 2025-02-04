import '../styles/Banner.css';
import tm from '../assets/programming.png';

function Banner() {
	let title = "Theo Morikawa";
	return (<div className='port-banner'>
		<header>
			<div className="logo-title">
				<img src={tm} alt='logo' className='banner_logo'/>
				<h1>{title}</h1>
			</div>
			<nav>
		  		<a href="#about">About</a>
		  		<a href="#projects">Projects</a>
		  		<a href="#resume">Resume</a>
			</nav>
	  	</header>
	</div>);
};

export default Banner;

