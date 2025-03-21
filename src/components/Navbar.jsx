import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              Skilling for Entrepreneurship
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/courses" className="nav-link">Courses</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 white:hover:bg-gray-700"
            >
              {darkMode ? <Sun color="white" className=" h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-l :hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/courses" className="nav-link">Courses</Link>

            <Link to="/dashboard" className="mobile-nav-link">Dashboard</Link>
            <Link to="/profile" className="mobile-nav-link">Profile</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;