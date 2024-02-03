import { useState, useRef } from "react";

//TODO: FINISH REQUIREMENTS

export default function Contact() {
  const [errors, setErrors] = useState([]);
  const formRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const formData = new FormData(event.target);

    const email = formData.get("email");
    const message = formData.get("message");

    let passesValidation = true;
    if (!email) {
      setErrors((prev) => {
        return [...prev, "Email is required"];
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
    // event.target.reset();
    formRef.current.reset();
  };
  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name-input">Email:</label>
        <input id="name-input" name="email" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="message-input">Message:</label>
        <textarea id="message-input" name="message" />
      </div>
      {errors.map((error) => (
        <span key={error} style={{ color: "red" }}>
          {error}
        </span>
      ))}
      <button>Send</button>
    </form>
  );
};