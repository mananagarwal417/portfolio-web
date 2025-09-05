import React from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/me.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-black text-white font-mono px-32 pt-28 space-y-30">
        <div className="grid md:grid-cols-2 gap-10 px-10 py-16 items-center">
          {/* About Section */}
          <section>
            <h2 className="text-4xl font-bold mb-6">
              <code>Hi, I’m Manan — Full-Stack Developer</code>
            </h2>
            <p className="text-white text-lg leading-relaxed mb-8">
              <code>
                I build fast, simple, and modern web apps that look great and
                work smoothly.
              </code>
            </p>
            <div className="flex gap-4">
              <NavLink
                to="/projects"
                className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-mono font-bold 
             hover:bg-cyan-400 hover:scale-105 transition-transform"
              >
                <code>View my Projects</code>
              </NavLink>
              
            </div>
          </section>

          {/* Image Section */}
          <section className="flex justify-center">
            <img
              src={image}
              alt="photo of me"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg border-2 border-white hover:scale-105 transition-transform duration-300"
            />
          </section>
        </div>
        <div className="px-10 py-16 items-center">
          <section className="">
            <h2 className="text-4xl font-bold mb-6">
              <code>Who am I?</code>
            </h2>
            <p className="text-white text-lg leading-relaxed mb-8  ">
              <code>
                I am a passionate web developer with experience in building
                modern web applications using React, Tailwind CSS, and other
                cutting-edge technologies.
              </code>
            </p>
            <div className="">
              <NavLink
                to="/about"
                className="inline-block border-2 border-cyan-500  text-white px-6 py-3 rounded-lg font-mono font-bold 
              hover:scale-105 transition-transform "
              >
                <code>Read More</code>
              </NavLink>
            </div>
          </section>
        </div>
        <div className="px-10 py-16 items-center">
          <section>
            <h2 className="text-4xl font-bold mb-6">
              <code>Want to work with me?</code>
            </h2>
            <div>
              <NavLink
                to="/contact"
                className="inline-block bg-cyan-500 text-black px-6 py-3 rounded-lg font-mono font-bold 
             hover:bg-cyan-400 hover:scale-105 transition-transform"
              >
                <code>Contact Me</code>
              </NavLink>
            </div>
          </section>
        </div>
        <div className="pt-16 flex justify-center space-x-6 text-white text-2xl relative bottom-8">
          <a
            href="https://github.com/agarwal1771"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manan-agarwal-5b290a256"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/MananAgarwal136?t=h4_UWcun29B3ZfIstlsN6w&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <SiX />
          </a>
          <a
            href="https://www.instagram.com/manan_agarwal06?igsh=aWF0anE4NzA4MDB1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
