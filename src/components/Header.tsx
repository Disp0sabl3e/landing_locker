import LockerLogo from '../assets/icons/logo-icon.svg';

// Components
import NavbarMobile from './NavbarMobile';
import Button from './Button';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center z-40">
      <img src={LockerLogo}></img>
      <div className="hidden lg:flex">
        <Navbar />
      </div>
      <div className="flex flex-row gap-8">
        <Button value="Enter dapp" href="" />
        <NavbarMobile />
      </div>
    </header>
  );
};

export default Header;
