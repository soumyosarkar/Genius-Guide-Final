import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo/Logo';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-primary">Home</a>
            <a href="#services" className="text-gray-600 hover:text-primary">Services</a>
            <a href="#about" className="text-gray-600 hover:text-primary">About</a>
            <a href="#contact" className="text-gray-600 hover:text-primary">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-primary">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-primary">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-primary">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-primary">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;