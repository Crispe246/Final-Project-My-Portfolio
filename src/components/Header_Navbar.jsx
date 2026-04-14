import React from 'react';

const Header_Navbar = ({ refs, scrollToSection }) => {
  const navItems = [
    { name: 'About', ref: refs.aboutRef },
    { name: 'Education', ref: refs.educationRef },
    { name: 'Skills', ref: refs.skillsRef },
    { name: 'Experience', ref: refs.experienceRef },
    { name: 'Contact', ref: refs.contactRef },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/90 backdrop-blur-md text-white border-b-4 border-blue-500 shadow-2xl">
      <div className="max-w-6xl mx-auto px-1 py-0 flex flex-col md:flex-row justify-between items-center">
        {/* Brand/Name Section */}
        <div className="text-center md:text-left">
          <h1 className="text-1xl font-extrabold uppercase tracking-tighter !font-mono">Mark Andrew Hoover</h1>
          <p className="text-blue-400 text-xs font-medium uppercase tracking-widest py-0.5">
            Network & Security
          </p>
        </div>

       {/* Navigation Links */}
<nav className="mt-4 md:mt-0">
  <ul className="flex space-x-4 text-xs font-semibold uppercase tracking-widest">
    {navItems.map((item) => (
      <li key={item.name}>
        <button
          onClick={() => scrollToSection(item.ref)}
          className="cursor-pointer rounded-full border border-blue-500/30 px-4 py-2 
                     transition-all duration-200 ease-in-out
                     hover:bg-blue-500 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] 
                     active:scale-95 active:bg-blue-600"
        >
          {item.name}
        </button>
      </li>
    ))}
  </ul>
</nav>
      </div>
    </header>
  );
};

export default Header_Navbar;