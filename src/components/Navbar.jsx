// src/components/Navbar.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-2  md:px-4">
      
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl font-bold">
          Sourov
        </NavLink>
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal   hidden md:flex px-1">
          <li>
            <NavLink to="#about">About</NavLink>
          </li>
          <li>
            <NavLink to="#projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="#contact">Contact</NavLink>
          </li>
        <button className="btn btn-ghost btn-circle ml-2" onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </button>
        </ul>
        <div className="dropdown dropdown-end md:hidden">
          <button onClick={toggleMenu} className="btn btn-ghost btn-circle">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {isMenuOpen && (
            <ul className="menu dropdown-content bg-base-100 rounded-box w-52 mt-3 p-2 shadow">
              <li>
                <NavLink to="#about" onClick={toggleMenu}>About</NavLink>
              </li>
              <li>
                <NavLink to="#projects" onClick={toggleMenu}>Projects</NavLink>
              </li>
              <li>
                <NavLink to="#contact" onClick={toggleMenu}>Contact</NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;