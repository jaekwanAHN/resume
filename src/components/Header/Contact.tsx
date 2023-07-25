import Link from 'next/link';

interface ContactProps {
  phoneNumber: string;
  eMail: string;
  github: string;
  blog: string;
}

const Contact = ({ phoneNumber, eMail, github, blog }: ContactProps) => {
  return (
    <table className="center">
      <tbody>
        <tr>
          <td>P.H: </td>
          <td>{phoneNumber}</td>
        </tr>
        <tr>
          <td>Email: </td>
          <td>
            <a href="mailto:ggstork@gmail.com">{eMail}</a>
          </td>
        </tr>
        <tr>
          <td>Github: </td>
          <td>
            <Link href={github}>{github}</Link>
          </td>
        </tr>
        <tr>
          <td>Blog: </td>
          <td>
            <Link href={blog}>{blog}</Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Contact;
