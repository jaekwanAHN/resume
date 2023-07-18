import Link from 'next/link';

interface ContactProps {
  phoneNumber: string;
  eMail: string;
  github: string;
  blog: string;
}

const Contact = ({ phoneNumber, eMail, github, blog }: ContactProps) => {
  return (
    <div className="contactContainer">
      <p>P.H: {phoneNumber}</p>
      <p>EMail: {eMail}</p> {/*이메일 보내기 링크도 추가하기 */}
      <p>
        GitHub: <Link href={github}>{github}</Link>
      </p>
      <p>
        Blog: <Link href={blog}>{blog}</Link>
      </p>
    </div>
  );
};

export default Contact;
