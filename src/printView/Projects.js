function Projects(props) {
  const projects = props.data.map((proj, index) => {
    return (
      <div key={index}>
        <h3>{proj.title}</h3>
        <h4>{proj.subtitle}</h4>
        <p>{proj.summary}</p>
      </div>
    );
  });
  return projects;
}

export default Projects;
