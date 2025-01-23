import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner() {
	let title = "My portfolio";
	return (<div className='port-banner'>
		<header>
			<img src={logo} alt='logo test' className='banner_logo' />
			<h1>{title}</h1>
			<nav style={{ textAlign:'right',padding:0.5}}>
		  		<a href="#about">À propos<br /></a>
		  		<a href="#projects">Projets<br /></a>
		  		<a href="#contact">Contact</a>
			</nav>
	  	</header>
	</div>);
};

export default Banner;

