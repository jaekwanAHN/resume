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
    <div className="mb-4">
      <div className="flex flex-row justify-around mb-1.5">
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
