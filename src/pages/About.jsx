import "../styles/App.css";

const About = () => {
  return (
    <section id="about">
      <h2>
        About <span>Me</span>
      </h2>

      <div className="about-container">
        <article className="about-card">
          <h3>
            Personal <span>Bio</span>
          </h3>

          <p>
            I'm Mahmud Abdulqadir, a passionate developer and technology
            enthusiast. I enjoy exploring modern technologies, solving problems,
            and turning creative ideas into real digital experiences.
          </p>

          <div className="info">
            <div>
              <strong>Name</strong>
              <span>Mahmud Abdulqadir</span>
            </div>

            <div>
              <strong>Role</strong>
              <span>Front-End Developer</span>
            </div>

            <div>
              <strong>Focus</strong>
              <span>React & Modern Web</span>
            </div>
          </div>
        </article>

        <article className="about-card">
          <h3>
            Professional <span>Journey</span>
          </h3>

          <p>
            Front-End Developer specializing in creating responsive,
            interactive, and modern web applications using React, JavaScript,
            HTML, CSS, and Tailwind CSS. I build projects with a strong focus on
            clean UI, performance, and user experience.
          </p>

          <div className="skills-mini">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Tailwind</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
