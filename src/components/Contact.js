import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const Contact = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const lettersOnly = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData((prevData) => ({
        ...prevData,
        [name]: lettersOnly,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setTimeout(() => {
      setStatusMessage("");
    }, 5000);
  };

  return (
    <>
      {statusMessage && (
        <div className="notification-banner">
          <p>{statusMessage}</p>
        </div>
      )}

      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={closeModal}>×</button>
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="send-button">Send Message</button>
          </form>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/jimmy-nguyen0/" target="_blank" className="linkedin-link" rel="noopener noreferrer">
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
