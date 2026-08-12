import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaCertificate,
  FaLanguage,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "../styles/App.css";

const slides = [
  {
    icon: <FaBriefcase />,
    title: "Professional Experience",
    subtitle: "Hands-on Front-End Development",
    content: [
      "Over one year of practical experience in front-end web development.",
      "Designed and developed more than 30 responsive web applications and personal projects.",
      "Strong understanding of modern HTML5, CSS3, JavaScript (ES6+), and React fundamentals.",
      "Committed to writing clean, maintainable, and scalable code following best practices.",
    ],
  },
  {
    icon: <FaCertificate />,
    title: "Education & Certifications",
    subtitle: "Continuous Learning",
    content: [
      "Successfully completed the ICDL (International Computer Driving License) certification.",
      "Completed a three-month professional front-end development training program.",
      "Continuously expanding technical knowledge through real-world projects and self-directed learning.",
      "Dedicated to staying current with modern web technologies and industry standards.",
    ],
  },
  {
    icon: <FaLanguage />,
    title: "Languages",
    subtitle: "Communication Skills",
    content: [
      "Arabic — Native proficiency.",
      "English — Professional working proficiency for technical communication.",
      "Comfortable reading technical documentation and collaborating in English-speaking environments.",
      "Strong written and verbal communication skills.",
    ],
  },
];

const Achievements = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="achievements">
      <h2>
        My <span>Achievements</span>
      </h2>

      <div className="achievement-card">
        <div className="icon">{slides[index].icon}</div>

        <span className="counter">
          {String(index + 1).padStart(2, "0")} /
          {String(slides.length).padStart(2, "0")}
        </span>

        <h3>{slides[index].title}</h3>

        <p className="subtitle">{slides[index].subtitle}</p>

        <ul>
          {slides[index].content.map((item, i) => (
            <li key={i}>✓ {item}</li>
          ))}
        </ul>

        <div className="controls">
          <button onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={index === i ? "active" : ""}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <button onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
