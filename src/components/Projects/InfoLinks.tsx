import Link from 'next/link';

interface InfoLinksProps {
  deployLink: string;
  githubLink: string;
}

const InfoLinks = ({ deployLink, githubLink }: InfoLinksProps) => {
  return (
    <>
      <Link href={deployLink}>배포 링크</Link>
      <br />
      <Link href={githubLink}>GitHub 링크</Link>
    </>
  );
};

export default InfoLinks;
