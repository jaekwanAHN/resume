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
          <td>
            <b>{phoneNumber}</b>
          </td>
        </tr>
        <tr>
          <td>Email: </td>
          <td>
            <b>
              {' '}
              <a href="mailto:ggstork@gmail.com">
                <i>{eMail}</i>
              </a>
            </b>
          </td>
        </tr>
        <tr>
          <td>Github: </td>
          <td>
            <Link href={github}>
              <b>
                <i>{github}</i>
              </b>
            </Link>
          </td>
        </tr>
        <tr>
          <td>Blog: </td>
          <td>
            <Link href={blog}>
              <b>
                <i>{blog}</i>
              </b>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Contact;
