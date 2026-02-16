import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-slate-900 text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur z-50 px-8 py-4 flex justify-between">
      <h1 className="font-bold text-blue-400">Shubhi Jain</h1>
      <div className="space-x-6 text-gray-300">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center px-8">
      <motion.h1
        initial="hidden"
        animate="show"
        variants={fade}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-4"
      >
        Hi, I’m <span className="text-blue-400">Shubhi Jain</span>
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="show"
        variants={fade}
        transition={{ delay: 0.3 }}
        className="text-xl text-gray-400"
      >
        Backend Developer | Django | APIs | Automation
      </motion.p>
    </section>
  );
}

function About() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      variants={fade}
      transition={{ duration: 0.6 }}
      className="py-24 px-8"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-400 max-w-2xl">
        Backend developer focused on building secure APIs and automation
        systems using Django REST Framework and modern tools.
      </p>
    </motion.section>
  );
}

function Skills() {
  const skills = ["Python", "Django", "Node.js", "SQL", "MongoDB", "Docker"];

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="show"
      variants={fade}
      transition={{ duration: 0.6 }}
      className="py-24 px-8"
    >
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-800 p-4 rounded-xl text-center hover:bg-gray-700 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function Projects() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="show"
      variants={fade}
      transition={{ duration: 0.6 }}
      className="py-24 px-8"
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Employee API" desc="Secure role-based backend system." />
        <Card title="Smart Home IoT" desc="Automation with sensors & control." />
        <Card title="TicketBot" desc="Automated booking workflow." />
      </div>
    </motion.section>
  );
}

function Card({ title, desc }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}

function Contact() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="show"
      variants={fade}
      transition={{ duration: 0.6 }}
      className="py-24 px-8 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-400">shubhijain4700@gmail.com</p>
    </motion.section>
  );
}
