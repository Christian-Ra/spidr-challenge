import { useState } from "react";
import TextInput from "./TextInput";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const secretPin = formData.pinParts.join("-");
    const output = { ...formData, secretPin };
    console.log("Submitted Data:", output);
    alert("Form submitted! Check the console.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "1rem", maxWidth: "500px", margin: "auto" }}
    >
      <h2>Contact Form</h2>

      <TextInput
        label='First Name'
        name='firstName'
        value={formData.firstName}
        onChange={handleChange}
      />

      <TextInput
        label='Last Name'
        name='lastName'
        value={formData.lastName}
        onChange={handleChange}
      />

      <TextInput
        label='Email'
        name='email'
        type='email'
        value={formData.email}
        onChange={handleChange}
      />

      <button
        type='submit'
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Submit
      </button>
    </form>
  );
}
