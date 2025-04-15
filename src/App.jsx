import { motion } from "framer-motion";
import { useEffect,useState,useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import CursorTrail from "./components/CursorTrail";


const projects = [
  {
    title: "Code Visualizer",
    video: "/videos/code-visualizer.webm",
    description: "Visual tool that turns code into dynamic diagrams.",
  },
  {
    title: "AI Assistant",
    video: "/videos/ai-assistant.webm",
    description: "Web-based assistant powered by transformers.",
  },
];

const certifications = [
  { name: "Full Stack Developer - Meta", url: "https://example.com/cert1" },
  { name: "TensorFlow Specialist", url: "https://example.com/cert2" },
];

//The following shit is what you see on screen:
export default function App() {
  return (
    <main className="bg-black text-green-400 min-h-screen font-mono px-4 py-10 space-y-20 relative overflow-hidden">
      {/* Fake CRT scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('/scanlines.png')] z-10" />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-20 relative"
      >
        <h1 className="text-5xl font-bold pb-2 tracking-widest neon-text">
          Jeman Kumar
        </h1>
      </motion.header>

      {/* About Me */}
      <motion.section
        className="z-20 relative max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl underline mb-4 text-green-300">About Me</h2>
        <p className="text-lg leading-relaxed">
        Aspiring Full Stack Developer with a strong MERN foundation, passionate about building responsive web apps. Enthusiastic problem-solver, always learning new frameworks to stay ahead. Eager to work as a part of a dynamic team
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section
        className="z-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl underline mb-4 text-green-300">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="border border-green-400 bg-black/70 p-4 shadow-xl backdrop-blur transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <video
                src={project.video}
                controls
                className="rounded mb-2 w-full"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        className="z-20 relative max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl underline mb-4 text-green-300">Certifications</h2>
        <ul className="list-disc list-inside space-y-1">
          {certifications.map((cert, idx) => (
            <li key={idx}>
              <a
                href={cert.url}
                className="hover:text-green-200 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {cert.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Contact */}
      <motion.section
        className="z-20 relative flex justify-center space-x-8 text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a href="mailto:youremail@example.com" title="Email" className="hover:text-green-200">
          <FaEnvelope />
        </a>
        <a href="https://github.com/yourhandle" title="GitHub" className="hover:text-green-200">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourhandle" title="LinkedIn" className="hover:text-green-200">
          <FaLinkedin />
        </a>
      </motion.section>

    </main>
  );
}
