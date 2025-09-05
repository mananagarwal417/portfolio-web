import React from "react";
import { NavLink } from "react-router-dom";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiAdobephotoshop } from "react-icons/si";
import { HiDownload } from "react-icons/hi";


function About() {
  return (
    <div className="min-h-screen bg-black text-white font-mono px-8 md:px-32 py-20 space-y-16">
      
      {/* Intro Section */}
      <section className="space-y-6 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <code>About Me</code>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          <code>
            I’m a Full-Stack Developer who loves building clean, modern, and
            scalable web applications. I enjoy solving problems and turning
            ideas into functional digital solutions.
          </code>
        </p>
        <p className="text-gray-400 leading-relaxed">
          <code>
            When I’m not coding, you’ll find me exploring new technologies,
            learning something creative, or contributing to projects that make
            a real impact. I also enjoy drawing and playing chess in my free
            time.
          </code>
        </p>

        
      </section>

      {/* Skills Section */}
      <section className="bg-gray-900 p-10 rounded-2xl shadow-lg border border-gray-700">
        <h3 className="text-2xl font-bold mb-12 text-center">
          <code>My Skills</code>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center space-y-10">
          <div className="flex flex-col items-center space-y-2">
            <FaReact className="text-cyan-400 text-4xl" />
            <code>React</code>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaNodeJs className="text-green-500 text-4xl" />
            <code>Node.js</code>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <SiMongodb className="text-green-400 text-4xl" />
            <code>MongoDB</code>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <SiTailwindcss className="text-cyan-500 text-4xl" />
            <code>Tailwind</code>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <SiJavascript className="text-yellow-400 text-4xl" />
            <code>JavaScript</code>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaDatabase className="text-gray-400 text-4xl" />
            <code>Databases</code>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <SiAdobephotoshop className="text-blue-400 text-4xl" />
            <code>Photoshop</code>
          </div>
        </div>
      </section>

      <section>
        <div >
          <a href="/Manan_Agarwal_Resume.pdf" download
           className="flex justify-center items-center space-x-5  w-60 border-2 border-cyan-500  text-white  px-6 py-3 rounded-lg font-mono font-bold 
            hover:scale-105 transition-transform"
          >
            <code>Download Resume</code>
            <HiDownload className="" />
          </a>
        </div>
     
      </section>
    </div>
  );
}

export default About;
