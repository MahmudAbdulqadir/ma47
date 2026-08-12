import { Link } from "react-router-dom";
import "../styles/App.css";

const Error = () => {
  return (
    <section className="error-page">
      <div className="error-glow"></div>

      <div className="error-card">
        <h1>404</h1>

        <h2>
          Lost in the <span>Aether</span>
        </h2>

        <p>
          The page you are searching for has disappeared into the digital
          universe. It may have been moved or never existed.
        </p>

        <Link to="/" className="error-btn">
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
