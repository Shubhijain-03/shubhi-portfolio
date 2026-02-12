export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 md:px-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Hi, I’m <span className="text-blue-400">Shubhi Jain</span>
      </h1>

      <p className="text-xl text-gray-400">
        Backend Developer | Django | APIs | Automation
      </p>

      <a
        href="#projects"
        className="mt-8 bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition w-fit"
      >
        View Projects
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-400 max-w-3xl">
        Backend developer focused on building secure APIs, automation tools,
        and real-world systems using Django REST Framework.
      </p>
    </section>
  );
}

function Skills() {
  const skills = [
    "Python",
    "Django / DRF",
    "Node.js",
    "JWT Auth",
    "SQL",
    "MongoDB",
    "Git",
    "Docker",
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-800 p-4 rounded-xl text-center hover:bg-gray-700 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <Card
          title="Employee Management API"
          desc="Role-based backend system with JWT authentication."
        />
        <Card
          title="Smart Home Automation"
          desc="IoT automation system with real-time control."
        />
        <Card
          title="IRCTC TicketBot"
          desc="Automated ticket booking using Selenium."
        />
      </div>
    </section>
  );
}

function Card({ title, desc }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}

function Contact() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-gray-400">shubhijain4700@gmail.com</p>
    </section>
  );
}

