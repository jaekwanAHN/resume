import InfoDate from '@/components/Projects/InfoDate';
import InfoLinks from '@/components/Projects/InfoLinks';

const ProjectInfos = () => {
  return (
    <div className="pr-8">
      <InfoDate projectDate={`2023.03~2023.05`} projectParticipants={'2명'} />
      <InfoLinks
        deployLink={'https://dust-rating.vercel.app/'}
        githubLink={'https://github.com/tooooo1/dust-rating'}
      />
    </div>
  );
};

export default ProjectInfos;
