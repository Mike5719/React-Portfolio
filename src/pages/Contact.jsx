import { useState, useRef } from "react";

export default function Contact() {
  const [errors, setErrors] = useState([]);
  const formRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    //ensure all fields are populated with valid input from the user
    let passesValidation = true;
    if (!name) {
      setErrors((prev) => {
        return [...prev, "Name is required"];
      });
      passesValidation = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !email.match(emailRegex)) {
      setErrors((prev) => {
        return [...prev, "Valid email address required"];
      });
      passesValidation = false;
    }
    if (!message) {
      setErrors((prev) => {
        return [...prev, "Message is required"];
      });
      passesValidation = false;
    }
    if (!passesValidation) {
      return;
    }
    console.log(email, message);
    formRef.current.reset();
  };
  return (
    //define form structure
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="contact"

    > <div className="contact">
        <label htmlFor="name-input">Name:</label>
        <input id="name-input" name="name" />
      </div>
      <div className="contact">
        <label htmlFor="name-input">Email:</label>
        <input id="name-input" name="email" />
      </div>
      <div className="contact">
        <label htmlFor="message-input">Message:</label>
        <textarea id="message-input" name="message" />
      </div>
      {errors.map((error) => (
        <span key={error} className="notify">
          {error}
        </span>
      ))}
      <button className="submitButton">Send</button>
    </form>
  );
};