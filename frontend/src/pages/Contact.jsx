import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "634d35d2-c846-4b58-ad54-ec957ea66021");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        form.reset();
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setResult("Submission failed!");
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-black flex items-center justify-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full max-w-2xl bg-gray-900 p-10 rounded-2xl shadow-lg border border-gray-700"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <h1 className="text-4xl font-mono font-bold text-center text-white mb-4">
          <code>Wanna collaborate with me?</code>
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block mb-2 text-white font-mono"><code>Name</code></label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 bg-black border border-gray-600 rounded-lg text-white font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label className="block mb-2 text-white font-mono"><code>Email</code></label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 bg-black border border-gray-600 rounded-lg text-white font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="block mb-2 text-white font-mono"><code>Message</code></label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="w-full px-4 py-2 bg-black border border-gray-600 rounded-lg text-white font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-cyan-500 text-black font-mono px-6 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <code>Send</code>
          </motion.button>
        </form>

        {result && (
          <motion.p
            className="mt-4 text-center text-white font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {result}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Contact;
