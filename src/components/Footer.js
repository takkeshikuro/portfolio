import '../styles/Footer.css'
import { footer_link } from "../constants";

function Footer() {
	return (
		<section id="footer" className='Footer-section'>
			<div className='logo_link'>
				{footer_link.map((social) => (
                    <Social key={social.id} title={social.title} icon={social.icon} link={social.link} />
                ))}
			</div>
		</section>
	);
}

function Social({ title, icon, link }) {

	return (
		<a href={link} target="_blank">
			<img src={icon} alt={title} className='social-logo'/>
		</a>
	);


}

export default Footer;