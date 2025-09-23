import Link from 'next/link';

interface InfoLinksProps {
  deployLink?: string;
  githubLink?: string;
}

const InfoLinks = ({ deployLink, githubLink }: InfoLinksProps) => {
  return (
    <>
      {deployLink ? <Link href={deployLink}>배포 링크</Link> : ''}
      <br />
      {githubLink ? <Link href={githubLink}>GitHub 링크</Link> : ''}
    </>
  );
};

export default InfoLinks;
