const project_list = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

function Projects() {
    return (
        <ul style={{textAlign:'left'}}>
            {project_list.map((project, index) => (
                <li key={`${project}-${index}`}>{project}</li>
            ))}
        </ul>
    )
}

export default Projects