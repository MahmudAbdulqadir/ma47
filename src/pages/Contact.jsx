import "../styles/App.css";
import {
  FaGithub,
  FaEnvelope,
  FaFacebook,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      icon: <FaGithub />,
      title: "GitHub",
      text: "View my projects",
      link: "https://github.com/MahmudAbdulqadir",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      text: "Send me a message",
      link: "mailto:m.abdulqadir.ma@gmail.com",
    },
    {
      icon: <FaFacebook />,
      title: "Facebook",
      text: "Connect with me",
      link: "https://www.facebook.com/share/14PzsKyGmgu/",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      text: "+249 115 527 855",
      link: "tel:+249115527855",
    },
  ];

  return (
    <section id="contactForm">
      <article className="contact-box">
        <h2>
          Contact <span>Me</span>
        </h2>

        <p className="contact-desc">
          Have a project in mind or want to work together? Feel free to reach
          out.
        </p>

        <div className="contact-container">
          {contacts.map((item, index) => (
            <a
              className="contact-card"
              key={index}
              href={item.link}
              target={
                item.title !== "Email" && item.title !== "Phone"
                  ? "_blank"
                  : undefined
              }
              rel="noreferrer"
            >
              <div className="icon-box">{item.icon}</div>

              <div className="contact-info">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

              <FaArrowRight className="arrow" />
            </a>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Contact;
