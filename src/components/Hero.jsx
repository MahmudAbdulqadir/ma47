import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "../styles/App.css";

const Hero = () => {
  const titles = ["WEB DEVELOPER", "REACT DEVELOPER", "JAVASCRIPT ENGINEER"];

  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];

    const timer = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));

          if (text.length + 1 === current.length) {
            setTimeout(() => {
              setDeleting(true);
            }, 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));

          if (text.length === 0) {
            setDeleting(false);

            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      deleting ? 40 : 100,
    );

    return () => clearTimeout(timer);
  }, [text, deleting, titleIndex]);

  return (
    <section className="hero">
      <div className="hero-image">
        <div className="glow"></div>

        <img src="/my photo.png.JPG" alt="Mahmud" />
      </div>

      <div className="hero-text">
        <p className="hello">
          <FaCode /> Hello, I'm
        </p>

        <h1>Mahmud Abdulqadir</h1>

        <h2>
          <span className="highlight">{text}</span>

          <span className="cursor">|</span>
        </h2>

        <p className="description">
          Building modern, responsive and powerful web experiences with React
          and JavaScript.
        </p>

        <ul className="social-icons">
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>

          <li>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>

          <li>
            <a href="https://github.com/MahmudAbdulqadir">
              <FaGithub />
            </a>
          </li>

          <li>
            <a href="mailto:m.abdulqadir.ma@gmail.com">
              <FaEnvelope />
            </a>
          </li>
        </ul>

        <div className="hero-buttons">
          <Link to="/projects" className="btn">
            View My Work
          </Link>

          <Link to="/contact" className="btn outline">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
