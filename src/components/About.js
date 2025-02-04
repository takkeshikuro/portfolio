import '../styles/About.css';

function Stack() {
	return (
		<div className='Stack-list'>
			<p>Stack list</p>
		</div>
	)
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