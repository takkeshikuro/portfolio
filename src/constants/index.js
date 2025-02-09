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
	cub3d_gif,
    irc_gif,
    minishell_gif,
    transc_gif,
    incep_gif,
} from "../assets";

const projects_list = [
	{
		title: "Cub3d",
		id: 1,
		bio: "cub quoi",
		gif: cub3d_gif,
		link: "https://github.com/takkeshikuro/cub3d_ok",
	},
	{
		title: "FT_IRC",
		id: 2,
		bio: "irc quoi",
		gif: irc_gif,
		link: "https://github.com/takkeshikuro/ft_irc",
	},
	{
		title: "Minishell",
		id: 3,
		bio: "minishell qwuoi",
		gif: minishell_gif,
		link: "https://github.com/takkeshikuro/minishell_42",
	},
	{
		title: "Transcendance",
		id: 4,
		bio: "transc quoi",
		gif: transc_gif,
		link: "https://github.com/Fryo92/Transcendance",
	},
	{
		title: "Inception",
		id: 5,
		bio: "incep quoi",
		gif: incep_gif,
		link: "https://github.com/takkeshikuro/Inception",
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

export { technologies, projects_list };