import {
	c,
	cpp,
	css,
	html,
	docker,
	git,
	js,
	nodejs,
	react,
	mysql,
	typescript,
	cub3d_gif,
    irc_gif,
    minishell_gif,
    transc_gif,
    incep_gif,
	portfolio_gif,
	gh,
	ig,
	lk,
} from "../assets";

const projects_list = [
	{
		title: "Cub3d",
		id: 1,
		bio: "Cub3D is a 3D game engine based on raycasting. It takes a 2D map and transforms \
		it into a 3D environment, handling player movement, camera angles, and textures. \
		This project enhances skills in graphics programming, math, and efficient memory usage.",
		gif: cub3d_gif,
		link: "https://github.com/takkeshikuro/cub3d_ok",
	},
	{
		title: "FT_IRC",
		id: 2,
		bio: "FT_IRC is an IRC server built in C++. It follows the IRC protocol, \
		allowing multiple users to connect, send messages, and manage channels. \
		The project reinforces knowledge of networking, sockets, and multi-threading.",
		gif: irc_gif,
		link: "https://github.com/takkeshikuro/ft_irc",
	},
	{
		title: "Minishell",
		id: 3,
		bio: "Minishell is a small Unix shell built in C. It replicates fundamental shell behaviors, \
		handling commands, pipes, redirections, and environment variables. \
		This project deepens knowledge of system calls, process management, and signals.",
		gif: minishell_gif,
		link: "https://github.com/takkeshikuro/minishell_42",
	},
	{
		title: "Transcendance",
		id: 4,
		bio: "Transcendence is a full-stack web project where you build a real-time \
		multiplayer Pong game using NestJS, React, and WebSockets. It includes authentication, a chat system, \
		and user management, simulating a real-world web application.",
		gif: transc_gif,
		link: "https://github.com/Fryo92/Transcendance",
	},
	{
		title: "Inception",
		id: 5,
		bio: "Inception introduces Docker and system administration.\
		 You must create a multi-container environment using Docker Compose, \
		 setting up services like Nginx, MariaDB, and WordPress while ensuring security,\
		 scalability, and isolation.",
		gif: incep_gif,
		link: "https://github.com/takkeshikuro/Inception",
	},
		{
		title: "Personal portfolio",
		id: 6,
		bio: "My own Portfolio made with React and Javascript.",
		gif: portfolio_gif,
		link: "https://github.com/takkeshikuro/Portfolio",
	},
]

const technologies = [
	{
		name: "C",
		icon: c,
		bio: "Low-level programming language used for system programming, operating systems, and embedded systems.",
		link: "https://devdocs.io/c/",
	},
	{
		name: "C++",
		icon: cpp,
		bio: "Extension of C that supports object-oriented programming, widely used for game development, high-performance applications, and system software.",
		link: "https://cplusplus.com/",
	},
	{
		name: "HTML",
		icon: html,
		bio: "(HyperText Markup Language) Standard language for creating and structuring content on the web.",
		link: "https://developer.mozilla.org/fr/docs/Web/HTML",
	},
	{
		name: "CSS",
		icon: css,
		bio: "(Cascading Style Sheets) Style sheet language used to control the layout, design, and visual appearance of web pages.",
		link: "https://developer.mozilla.org/fr/docs/Web/CSS/Reference",
	},
	{
		name: "Docker",
		icon: docker,
		bio: "Platform that allows developers to package applications into containers, ensuring consistency across different environments.",
		link: "https://docs.docker.com/",
	},
	{
		name: "Git",
		icon: git,
		bio: "Distributed version control system that helps track changes in code, collaborate with teams, and manage project history efficiently.",
		link: "https://git-scm.com/docs/git",
	},
	{
		name: "Javascript",
		icon: js,
		bio: "Versatile scripting language used primarily for web development.",
		link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{
		name: "Typescript",
		icon: typescript,
		bio: "TypeScript is a statically typed superset of JavaScript used for building scalable, maintainable web applications.",
		link: "https://www.typescriptlang.org/docs/",
	},
	{
		name: "NodeJS",
		icon: nodejs,
		bio: "Node.js allows you to run JavaScript on the server-side.",
		link: "https://nodejs.org/en",
	},
	{
		name: "React",
		icon: react,
		bio: "JavaScript library for building dynamic user interfaces.",
		link: "https://react.dev/",
	},
	{
		name: "MySQL",
		icon: mysql,
		bio: "Open-source relational database management system used to store, organize, and manage structured data efficiently.",
		link: "https://dev.mysql.com/doc/refman/8.4/en/docker-mysql-getting-started.html",
	},
];

const about_text = [
		"Hi, I’m Theo, a recent graduate from École 42 (School 42), based in Paris.",
		"I’m currently looking for an internship where I can apply my skills, learn new things, and contribute to impactful projects.",
		"What drives me is my natural curiosity and versatility, I consider myself a problem-solver, much like a Swiss Army knife—adaptable and equipped for various tasks.",
		"I thrive in environments where I can solve problems, learn from others, and push the boundaries of my knowledge. Whether it’s building projects, analyzing systems, or discovering new technologies.",
		"If you’re looking for someone resourceful, adaptable, and genuinely passionate about tech, let’s connect!",
]

const footer_link = [
	{
		title: "github",
		id: 1,
		icon: gh,
		link: "https://github.com/takkeshikuro",
	},
	{
		title: "instagram",
		id: 2,
		icon: ig,
		link: "https://www.instagram.com/keshikuro/",
	},
	{
		title: "linkedin",
		id: 3,
		icon: lk,
		link: "https://fr.linkedin.com/in/theo-takeshi-morikawa-162099288",
	},
];


export { technologies, projects_list, about_text, footer_link };