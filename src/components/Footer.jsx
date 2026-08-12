import "../styles/App.css";
import { FaHeart, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>
        Mahmud <span>47</span>
      </h3>

      <p>
        Built with <FaHeart className="heart" /> by{" "}
        <strong>Mahmud Abdulqadir</strong>
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/MahmudAbdulqadir"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a href="mailto:m.abdulqadir.ma@gmail.com">
          <FaEnvelope /> Email
        </a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Mahmud Abdulqadir. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
