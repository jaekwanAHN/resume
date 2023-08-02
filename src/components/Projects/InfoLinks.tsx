import Link from 'next/link';

interface InfoLinksProps {
  deployLink: string;
  githubLink: string;
}

const InfoLinks = ({ deployLink, githubLink }: InfoLinksProps) => {
  return (
    <>
      <Link href={deployLink}>
        <i>배포 링크</i>
      </Link>
      <br />
      <Link href={githubLink}>
        <i>GitHub 링크</i>
      </Link>
    </>
  );
};

export default InfoLinks;
