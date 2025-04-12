import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "Cool Project",
    video: "",
    description: "A short description of how this project works.",
  },
  {
    title: "Another Project",
    video: "",
    description: "Another cool project with interesting features.",
  },
];

const certifications = [
  { name: "Full Stack Dev", url: "https://example.com/cert1" },
  { name: "AI Basics", url: "https://example.com/cert2" },
];
function App() {
  return (
    <div className="bg-black text-green-400 min-h-screen p-6 font-mono space-y-12">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold border-b-2 border-green-400 inline-block pb-2">
          Your Name
        </h1>
      </motion.header>

      {/* About Me */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl mb-2 underline">About Me</h2>
        <p className="text-lg max-w-2xl">
          I’m a full-stack developer who loves building creative tools and exploring retro aesthetics.
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl mb-4 underline">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border border-green-400 p-4 rounded-xl bg-black/40"
              whileHover={{ scale: 1.02 }}
            >
              <video src={project.video} controls className="rounded mb-2" />
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl mb-2 underline">Certifications</h2>
        <ul className="list-disc list-inside">
          {certifications.map((cert, index) => (
            <li key={index}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 underline hover:text-green-200"
              >
                {cert.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center gap-6 text-3xl"
      >
        <a
          href="mailto:youremail@example.com"
          className="hover:text-green-200"
          title="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/yourgithub"
          className="hover:text-green-200"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          className="hover:text-green-200"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </motion.section>
    </div>
  )
}

export default App
