import Profile from '@/components/Header/Profile';
import Contact from '@/components/Header/Contact';
import Introduce from '@/components/Header/Introduce';

interface HeaderProps {
  PersonalInformation: {
    name: string;
    phoneNumber: string;
    eMail: string;
    github: string;
    blog: string;
  };
}

const Header = ({ PersonalInformation }: HeaderProps) => {
  const { name, phoneNumber, eMail, github, blog } = PersonalInformation;

  return (
    <div className="section">
      <div className="section flex flex-row  justify-around">
        <Profile name={name} />
        <Contact
          phoneNumber={phoneNumber}
          eMail={eMail}
          github={github}
          blog={blog}
        />
      </div>
      <Introduce />
    </div>
  );
};

export default Header;
