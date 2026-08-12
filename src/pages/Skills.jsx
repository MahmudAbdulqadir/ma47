import "../styles/App.css";
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", level: "73%" },
    { name: "JavaScript", level: "70%" },
    { name: "CSS", level: "86%" },
    { name: "HTML", level: "90%" },
    { name: "Tailwind CSS", level: "80%" },
  ];

  const techStack = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaGithub />, name: "GitHub" },
  ];

  return (
    <section id="skill">
      <h2>
        My <span>Skills</span>
      </h2>

      <div className="skills-container">
        <div className="skill-bars">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>

              <div className="progress">
                <span style={{ width: skill.level }}></span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="stack-title">
          My <span>Tech Stack</span>
        </h2>

        <ul className="skill-card">
          {techStack.map((tech, index) => (
            <li key={index}>
              <div className="icon">{tech.icon}</div>
              <p>{tech.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
