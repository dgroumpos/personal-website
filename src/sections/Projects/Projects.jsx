import ProjectCard from '../../common/ProjectCard';
import projects from '../../common/data/projects';

function Projects() {
  return (
    <section id='projects' className=''>
      <h1 className='sectionTitle'>Projects</h1>
      <div className=''>
        {projects.map((project) => {
          let { title, thumbnail, url, description } = project;
          return (
            <ProjectCard
              key={url}
              h3={title}
              src={thumbnail}
              link={url}
              p={description}
            />
          );
        })}
      </div>
    </section>
  );
}
export default Projects;
