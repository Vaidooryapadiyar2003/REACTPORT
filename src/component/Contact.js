import "../css/Contact.css"; // Import the corresponding CSS file
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Facebook from "../images/p1.jpeg";
import Instagram from "../images/p2.jpeg";
import Linkdin from "../images/p3.jpeg";
import Whatsapp from "../images/p4.jpeg";
import Icon from "../images/b1.jpg";

export const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_cl9pv7l",
        "template_eddtcjm",
        form.current,
        "hkMd7PDh3T2x5C1s0"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form id="contactForm" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" className="name" placeholder="Your Name" />
        <label>Email</label>
        <input type="email" className="email" placeholder="Your Email" />
        <label>Message</label>
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        />
        <div className="submitContainer">
          <button type="submit" value="Send" className="submitBtn">
            {loading ? "Sending..." : "Submit"}
            {loading && <img src={Icon} alt="icon" className="loaderIcon" />}
          </button>
        </div>

        <div className="links">
          <img src={Facebook} alt="Facebook" className="link" />
          <img src={Instagram} alt="Instagrm" className="link" />
          <img src={Linkdin} alt="Linkdin" className="link" />
          <img src={Whatsapp} alt="Whatsapp" className="link" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
