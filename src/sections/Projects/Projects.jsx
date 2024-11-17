import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={'https://github.com/dgroumpos/Reactivities'}
          h3={'Sample project 1'}
          p={'Sample project 1'}
        />
        <ProjectCard
          src={freshBurger}
          link={'https://github.com/dgroumpos/Reactivities'}
          h3={'Sample project 2'}
          p={'Sample project 2'}
        />
        <ProjectCard
          src={hipsster}
          link={'https://github.com/dgroumpos/Reactivities'}
          h3={'Sample project 3'}
          p={'Sample project 3'}
        />
        <ProjectCard
          src={fitLift}
          link={'https://github.com/dgroumpos/Reactivities'}
          h3={'Sample project 4'}
          p={'Sample project 4'}
        />
      </div>
    </section>
  );
}
export default Projects;
