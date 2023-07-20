import ProjectInfos from '@/components/Projects/ProjectInfos';
import ProjectContent from '@/components/Projects/ProjectContent';
import { ProjectInfo } from '@/types';

interface ProjectInfoProps {
  projects: ProjectInfo[];
}

const Projects = ({ projects }: ProjectInfoProps) => {
  return (
    <div className="flex justify-start">
      <ProjectInfos
        projectDate={projects[0].projectDate}
        projectParticipants={projects[0].projectParticipants}
        deployLink={projects[0].deployLink} // 추후 idx 하드코딩 -> list rendering 으로 수정 필요
        githubLink={projects[0].githubLink}
      />
      <ProjectContent
        stackList={projects[0].stackList}
        feature={projects[0].feature}
      />
    </div>
  );
};

export default Projects;
