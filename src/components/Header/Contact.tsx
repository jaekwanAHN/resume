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
      <a href="mailto:`ggstork@gmail.com`">EMail: {eMail}</a>{' '}
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
