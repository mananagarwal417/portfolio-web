import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import axios from "axios";

function Contact() {
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await axios.post("https://getform.io/f/bvrmzeqb", formData);

      form.reset(); // clear form fields
     
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl bg-gray-900 p-10 rounded-2xl shadow-lg border border-gray-700">
        {/* Heading */}
        <h1 className="text-4xl font-mono font-bold text-center text-white mb-4">
          <code>Wanna collaborate with me?</code>
        </h1>
        <p className="text-center text-gray-300 font-mono mb-10 text-xl">
          <code>Let's build something together!</code>
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block mb-2 text-white font-mono">
              <code>Name</code>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 bg-black border border-gray-600 rounded-lg text-white font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-white font-mono">
              <code>Email</code>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 bg-black border border-gray-600 rounded-lg text-white font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-white font-mono">
              <code>Message</code>
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-2 bg-black border border-gray-600 rounded-lg text-white font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-cyan-500 text-black font-mono px-6 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:scale-105 transition-transform"
          >
            <code>Send</code>
          </button>
        </form>

        {/* Social Media Icons */}
        <div className="mt-10 flex justify-center space-x-6 text-white text-2xl">
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
    </div>
  );
}

export default Contact;
