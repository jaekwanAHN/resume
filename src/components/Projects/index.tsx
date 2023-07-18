import ProjectInfos from '@/components/Projects/ProjectInfos';
import ProjectContent from '@/components/Projects/ProjectContent';

interface tempObjProps {
  projectDate: string;
  projectParticipants: string;
  deployLink: string;
  githubLink: string;
  stackList: string[];
}

const Projects = () => {
  return (
    <div className="flex justify-start">
      <ProjectInfos />
      <ProjectContent />
    </div>
  );
};

export default Projects;
