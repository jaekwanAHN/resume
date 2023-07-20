import InfoDate from '@/components/Projects/InfoDate';
import InfoLinks from '@/components/Projects/InfoLinks';

interface ProjectInfos {
  projectDate: string;
  projectParticipants: string;
  deployLink: string;
  githubLink: string;
}

const ProjectInfos = ({
  projectDate,
  projectParticipants,
  deployLink,
  githubLink,
}: ProjectInfos) => {
  return (
    <div className="pr-8">
      <InfoDate
        projectDate={projectDate}
        projectParticipants={projectParticipants}
      />
      <InfoLinks deployLink={deployLink} githubLink={githubLink} />
    </div>
  );
};

export default ProjectInfos;
