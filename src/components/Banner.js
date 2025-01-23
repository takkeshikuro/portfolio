import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner() {
	let title = "My portfolio";
	return (<div className='port-banner'>
		<header>
			<div className="logo-title">
				<img src={logo} alt='logo test' className='banner_logo' />
				<h1>{title}</h1>
			</div>
			<nav>
		  		<a href="#about">About</a>
		  		<a href="#projects">Projects</a>
		  		<a href="#contact">Resume</a>
			</nav>
	  	</header>
	</div>);
};

export default Banner;

