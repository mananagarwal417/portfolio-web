import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white font-mono sticky top-0 z-50 px-6 md:px-32">
      <nav className="flex items-center justify-between px-4 py-4 border-b border-gray-700 box-border">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <code>Manan Agarwal</code>
        </div>

        {/* Desktop Menu */}
        <div className="hidden min-[901px]:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold bg-cyan-500 border border-cyan-500 px-3 py-1 rounded"
                : "text-white border border-transparent hover:border hover:border-cyan-500 px-3 py-1 rounded transition"
            }
          >
            <code>Home</code>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold bg-cyan-500 border border-cyan-500 px-3 py-1 rounded"
                : "text-white border border-transparent hover:border hover:border-cyan-500 px-3 py-1 rounded transition"
            }
          >
            <code>About</code>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold bg-cyan-500 border border-cyan-500 px-3 py-1 rounded"
                : "text-white border border-transparent hover:border hover:border-cyan-500 px-3 py-1 rounded transition"
            }
          >
            <code>Projects</code>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold bg-cyan-500 border border-cyan-500 px-3 py-1 rounded"
                : "text-white border border-transparent hover:border hover:border-cyan-500 px-3 py-1 rounded transition"
            }
          >
            <code>Contact Me</code>
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="min-[901px]:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="min-[901px]:hidden flex flex-col items-center bg-gray-900 border-t border-gray-700 py-4 space-y-4">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold bg-cyan-500 px-3 py-1 rounded w-full text-center"
                : "text-white hover:bg-cyan-500 px-3 py-1 rounded transition w-full text-center"
            }
          >
            <code>Home</code>
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold bg-cyan-500 px-3 py-1 rounded w-full text-center"
                : "text-white hover:bg-cyan-500 px-3 py-1 rounded transition w-full text-center"
            }
          >
            <code>About</code>
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold bg-cyan-500 px-3 py-1 rounded w-full text-center"
                : "text-white hover:bg-cyan-500 px-3 py-1 rounded transition w-full text-center"
            }
          >
            <code>Projects</code>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold bg-cyan-500 px-3 py-1 rounded w-full text-center"
                : "text-white hover:bg-cyan-500 px-3 py-1 rounded transition w-full text-center"
            }
          >
            <code>Contact Me</code>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
