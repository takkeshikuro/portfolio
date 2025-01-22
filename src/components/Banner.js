import '../styles/Banner.css';

function Banner() {
	let title = "My portfolio";
	return (<div classname='port_banner'>
		<header>
			<h1>{title}</h1>
			<nav>
		  		<a href="#about">À propos<br /></a>
		  		<a href="#projects">Projets<br /></a>
		  		<a href="#contact">Contact</a>
			</nav>
	  	</header>
	</div>);
};

export default Banner;

