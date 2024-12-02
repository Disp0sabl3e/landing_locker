import { useState } from 'react';

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center relative">
      {/* Mobile Burger Button */}
      <button
        className="lg:hidden fixed z-[60]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="space-y-2">
          <span
            className={`block w-8 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
          ></span>
        </div>
      </button>

      {/* Mobile Menu */}
      <nav
        className={`${isOpen ? 'flex' : 'hidden'} lg:hidden flex-col fixed inset-0 bg-black z-50 items-center justify-center gap-8`}
      >
        <a
          href="/"
          className="opacity-50 hover:opacity-100 ease-in-out duration-200 text-xl"
        >
          About
        </a>
        <a
          href="/"
          className="opacity-50 hover:opacity-100 ease-in-out duration-200 text-xl"
        >
          Documentation
        </a>
        <a
          href="/"
          className="opacity-50 hover:opacity-100 ease-in-out duration-200 text-xl"
        >
          Socials
        </a>
        <a
          href="/"
          className="opacity-50 hover:opacity-100 ease-in-out duration-200 text-xl"
        >
          $Locker
        </a>
      </nav>
    </div>
  );
};

export default NavbarMobile;
