import InfoDate from '@/components/Projects/InfoDate';
import InfoLinks from '@/components/Projects/InfoLinks';

interface ProjectInfos {
  projectTitle: string;
  projectDate: string;
  projectParticipants: string;
  deployLink?: string;
  githubLink: string;
}

const ProjectInfos = ({
  projectTitle,
  projectDate,
  projectParticipants,
  deployLink,
  githubLink,
}: ProjectInfos) => {
  return (
    <div className="min-w-[200px] ">
      <InfoDate
        projectTitle={projectTitle}
        projectDate={projectDate}
        projectParticipants={projectParticipants}
      />
      <InfoLinks deployLink={deployLink} githubLink={githubLink} />
    </div>
  );
};

export default ProjectInfos;
