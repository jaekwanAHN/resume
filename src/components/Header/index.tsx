import Profile from '@/components/Header/Profile';
import Contact from '@/components/Header/Contact';
import Introduce from '@/components/Header/Introduce';

const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-around ">
        <Profile />
        <Contact />
      </div>
      <Introduce />
    </>
  );
};

export default Header;
