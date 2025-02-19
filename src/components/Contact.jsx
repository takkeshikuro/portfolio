import { useState } from "react";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import GradientText from './GradientText'


function Contact() {
	const own_mail = " - takeshi.27@outlook.fr -";
	const letsw = "Let's work together";
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const mailtoLink = `mailto:${own_mail}?subject=Contact%20depuis%20le%20site&body=Nom:%20${formData.name}%0AEmail:%20${formData.email}%0AMessage:%20${formData.message}`;
		window.location.href = mailtoLink;
	};

	return (
		<section id="Contact" className="contact-section">
			<h2>				
				<GradientText
					colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
					animationSpeed={3}
					showBorder={false}
					className="custom-class" > Contact </GradientText>	
			</h2>
			<div className="box">
				<div className="info">
					<h3>{letsw.split("").map((char, index) => ( 
						<motion.span
							key={index}
							className="letter"
							initial={{ color: "rgb(8, 6, 6)" }} 
							animate={{ color: "rgb(255, 249, 249)" }}
							whileHover={{
								color: ["rgb(19, 15, 109)", "rgb(242, 242, 242)"], // Gris -> Blanc
								scale: 1.1,
								transition: { duration: 0.3, ease: "easeInOut" }}} > {char === " " ? "\u00A0" : char}
						</motion.span> ))}
					</h3>
					<p>				
						<GradientText
							text-align="left"
							colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
							animationSpeed={3}
							showBorder={false}
							className="custom-class-p" > my mail : 
						</GradientText> {own_mail.split("").map((char, index) => (
							<motion.span
								key={index}
								className="letter"
								initial={{ color: "rgb(8, 6, 6)" }} 
								animate={{ color: "rgb(255, 249, 249)" }}
								whileHover={{
									color: ["rgb(19, 15, 109)", "rgb(242, 242, 242)"], // Gris -> Blanc
									scale: 1.1,
									transition: { duration: 0.3, ease: "easeInOut" }}} >{char === " " ? "\u00A0" : char}
							</motion.span> ))}
					</p>
					<p>	<GradientText
						colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
						animationSpeed={3}
						showBorder={false}
						className="custom-class-p" > Based in Paris, France </GradientText>	
					</p>
				</div>
				<div className="contact-box">
					<form onSubmit={handleSubmit} className="contact-form">
						<input 
							type="text" 
							name="name" 
							placeholder="Name" 
							value={formData.name} 
							onChange={handleChange} 
							required />
						<input 
							type="email" 
							name="email" 
							placeholder="Email" 
							value={formData.email} 
							onChange={handleChange} 
							required />
						<textarea 
							name="message" 
							placeholder="Message" 
							value={formData.message} 
							onChange={handleChange} 
							required ></textarea>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
