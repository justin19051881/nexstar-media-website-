import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  );

  const headerHeight = useTransform(scrollY, [0, 100], ['6rem', '4rem']);

  return (
    <motion.header
      style={{ background: headerBackground, height: headerHeight }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary"
          >
            Nexstar
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {['Home', 'About', 'Services', 'News', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : item.toLowerCase()}
              className={({ isActive }) =>
                `px-4 py-2 relative group ${
                  isActive ? 'text-primary' : 'text-gray-700'
                }`
              }
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Get Started
          </motion.button>
        </div>

        <motion.button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X /> : <Menu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {['Home', 'About', 'Services', 'News', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : item.toLowerCase()}
                className={({ isActive }) =>
                  `px-4 py-2 ${isActive ? 'text-primary' : 'text-gray-700'}`
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
}