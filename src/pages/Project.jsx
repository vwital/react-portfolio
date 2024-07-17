import { useParams } from 'react-router-dom';
import projects from '../helpers/projectsList';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import BtnDeploy from '../components/btnDeploy/BtnDeploy';
import BtnDemo from '../components/btnDemo/BtnDemo';

function ProjectPage() {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <p className="project-details__char">{project.description}</p>
          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Stack: {project.stack}</p>
          </div>
          <div className="project-details__links">
            {project.deploy && <BtnDeploy link={project.deploy} />}
            {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
            {project.demo && <BtnDemo link={project.demo} />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
