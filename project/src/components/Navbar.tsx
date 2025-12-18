import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Cosmetology', path: '/services/cosmetology' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#A7D3F3] to-[#F7C6D3] p-2 rounded-xl"
            >
              <Heart className="w-6 h-6 text-white" fill="white" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3] bg-clip-text text-transparent">
                Alexis Hospital
              </h1>
              <p className="text-xs text-gray-500">Healthcare & Wellness</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative"
              >
                <motion.span
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-[#A7D3F3]'
                      : 'text-gray-700 hover:text-[#A7D3F3]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3]"
                  />
                )}
              </Link>
            ))}
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3] text-white px-6 py-2.5 rounded-full font-medium shadow-lg"
              >
                Book Appointment
              </motion.button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-lg mb-2 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-[#A7D3F3]/20 to-[#F7C6D3]/20 text-[#A7D3F3]'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/booking" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3] text-white px-6 py-3 rounded-full font-medium shadow-lg">
                Book Appointment
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
