import ProjectInfos from '@/components/Projects/ProjectInfos';
import ProjectContent from '@/components/Projects/ProjectContent';
import { ProjectInfo } from '@/types';

interface ProjectInfoProps {
  projects: ProjectInfo[];
}

const Projects = ({ projects }: ProjectInfoProps) => {
  return (
    <div className="flex justify-start flex-col pb-2">
      <p className="text-2xl text-blue-500">Projects</p>
      {projects.map((project) => {
        return (
          <div
            key={project.projectTitle}
            className="flex flex-row border-2 border-transparent border-b-blue-600            
          pb-2"
          >
            <div className="flex">
              <ProjectInfos
                projectTitle={project.projectTitle}
                projectDate={project.projectDate}
                projectParticipants={project.projectParticipants}
                deployLink={project.deployLink}
                githubLink={project.githubLink}
              />
              <ProjectContent
                stackList={project.stackList}
                feature={project.feature}
                description={project.description}
              />
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
