const Navbar = () => {
  return (
    <div className="flex items-center relative">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex flex-row xl:gap-20 lg:gap-18 md:gap-12 gap-2">
        <a
          href="/"
          className="opacity-50 hover:opacity-100 ease-in-out duration-200"
        >
          About
        </a>
        <a
          href="/"
          className="opacity-50 hover:opacity-100 ease-in-out duration-200"
        >
          Documentation
        </a>
        <a
          href="/"
          className="opacity-50 hover:opacity-100 ease-in-out duration-200"
        >
          Socials
        </a>
        <a
          href="/"
          className="opacity-50 hover:opacity-100 ease-in-out duration-200"
        >
          $Locker
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
