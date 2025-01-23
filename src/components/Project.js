import '../styles/Projects.css';

function Projects() {
	const projects_list = [
		{ title:"Minishell", id: 1, bio:"minishell quoi"},
		{ title:"FT_IRC", id: 2, bio:"irc en c quoi"},
		{ title:"CUB3D", id: 3, bio:"jeu quoi"},
		{ title:"Transcendance", id: 4, bio:"pong quoi"},
		{ title:"Inception", id: 5, bio:"archi quoi"},
	];
	return (
		<div className="projects-list">
			<h1>PROJECTS</h1>
			<div >
				{projects_list.map((projects_list) => (
					<ProjectCard key={projects_list.id} 
						title={projects_list.title}
						bio={projects_list.bio} />   
				))}
			</div>
		</div>
	)
}

function ProjectCard({title, bio}) {
	return (
		<div className="project-card">
			<h2>{title}</h2>
			<p>{bio}</p>
		</div>
	);
}

export default Projects;