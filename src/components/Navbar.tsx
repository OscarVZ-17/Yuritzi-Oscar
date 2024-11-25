import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Book, PenTool, Images } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: '/', icon: Heart, label: 'Home' },
    { to: '/memories', icon: Images, label: 'Memories' },
    { to: '/poems', icon: Book, label: 'Poems' },
    { to: '/journal', icon: PenTool, label: 'Journal' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            {links.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className="relative flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{label}</span>
                {location.pathname === to && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;