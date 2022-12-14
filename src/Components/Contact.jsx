import ContactForm from "./ContactForm";
import "./Styles/Contact.css";


export default function Contact() {
  return (
    <>
      <div className="contact">
        <ContactForm />
        <div className="socials">
          <h4>OR CONNECT WITH ME ON </h4>
          <a href="https://www.linkedin.com/in/alexannmill/" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="Alex Miller GitHub"
              height="30"
              width="40"
            />
          </a>
          <a href="https://github.com/alexannmill" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
              alt="Alex Miller LinkedIn"
              height="30"
              width="40"
            />
          </a>
        </div>
      </div>
    </>
  );
}

