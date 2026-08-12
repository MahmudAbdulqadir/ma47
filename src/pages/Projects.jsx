import Card from "../components/Card";
import "../styles/App.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MY LIFE OS",
      status: "Completed",
      date: "2025",
      image: "/2.jpg",
      description:
        "A personal productivity system designed to manage daily tasks, goals, and personal organization.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Productivity",
      url: "https://mahmud-os.netlify.app/",
      featured: true,
    },

    {
      id: 2,
      title: "SPEECH CONVERTER",
      status: "Completed",
      date: "2024",
      image: "/5.jpg",
      description:
        "A speech and text conversion tool using modern browser APIs.",
      technologies: ["JavaScript", "Web API", "CSS"],
      category: "Utility",
      url: "https://mahmud-textconvertor.netlify.app/",
    },

    {
      id: 3,
      title: "ALARM",
      status: "Completed",
      date: "2024",
      image: "/4.jpg",
      description:
        "A responsive alarm clock application with a clean user interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Application",
      url: "https://mahmud-alarm.netlify.app/",
    },

    {
      id: 4,
      title: "CALCULATOR",
      status: "Completed",
      date: "2024",
      image: "/1.jpg",
      description: "A functional calculator application with modern UI design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      url: "https://mahmud47-calculator.netlify.app/",
    },

    {
      id: 5,
      title: "HANGMAN GAME",
      status: "Completed",
      date: "2025",
      image: "/6.jpg",
      description:
        "A word guessing game built with JavaScript logic and interactive UI.",
      technologies: ["JavaScript", "CSS"],
      category: "Game",
      url: "https://mahmud-hanged.netlify.app/",
    },

    {
      id: 6,
      title: "BUSINESS CARD",
      status: "Completed",
      date: "2024",
      image: "/9.jpg",
      description: "A responsive digital business card website.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Design",
      url: "https://card-47.netlify.app",
    },

    {
      id: 7,
      title: "WORD TRANSLATOR",
      status: "Completed",
      date: "2025",
      image: "/8.jpg",
      description:
        "A simple translation application for converting words between languages.",
      technologies: ["JavaScript", "API", "CSS"],
      category: "API Project",
      url: "https://mahmud-tr.netlify.app/",
    },

    {
      id: 8,
      title: "DIGITAL CLOCK",
      status: "Completed",
      date: "2025",
      image: "/7.jpg",
      description: "A real-time digital clock with dynamic updates.",
      technologies: ["JavaScript", "CSS"],
      category: "Frontend",
      url: "https://m47-clock.netlify.app/",
    },
  ];

  return (
    <section id="projects">
      <h2>
        Featured <span>Projects</span>
      </h2>

      <div className="projects">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
