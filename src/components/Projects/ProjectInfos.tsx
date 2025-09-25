import Link from 'next/link';

interface ProjectInfos {
  projectTitle: string;
  companyName?: string;
  projectDate: string;
  projectParticipants?: string;
  deployLink?: string;
  githubLink?: string;
}

const ProjectInfos = ({
  projectTitle,
  companyName,
  projectDate,
  projectParticipants,
  deployLink,
  githubLink,
}: ProjectInfos) => {
  return (
    <div className="min-w-[200px] ">
      <div className="text-lg mb-4">
        <p>
          <b>{projectTitle}</b>
        </p>
        <p className="font-light text-sm">{companyName}</p>
        <p className="font-light text-sm">{projectDate}</p>
        <p className="font-light text-sm">{projectParticipants}</p>
      </div>
      <>
        {deployLink ? <Link href={deployLink}>배포 링크</Link> : ''}
        <br />
        {githubLink ? <Link href={githubLink}>GitHub 링크</Link> : ''}
      </>
    </div>
  );
};

export default ProjectInfos;
