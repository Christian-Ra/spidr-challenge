import { useState } from "react";
import TextInput from "./TextInput";
import PhoneInput from "./PhoneInput";
import PINInputGroup from "./PINGroupInput";
import CurrencyInput from "./CurrencyInput";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    costGuess: "",
    pinParts: ["", "", "", ""], // Assuming a 4-part PIN input
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const setPinParts = (newParts) => {
    setFormData((prev) => ({ ...prev, pinParts: newParts }));
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
        placeholder={"John"}
        value={formData.firstName}
        onChange={handleChange}
      />

      <TextInput
        label='Last Name'
        name='lastName'
        placeholder={"Doe"}
        value={formData.lastName}
        onChange={handleChange}
      />
      <PhoneInput
        label='Phone Number'
        name='phone'
        value={formData.phone || ""}
        onChange={handleChange}
      />

      <TextInput
        label='Email'
        name='email'
        type='email'
        placeholder={"JohnDoe@gmail.com"}
        value={formData.email}
        onChange={handleChange}
      />

      <CurrencyInput
        label='Cost Guess (USD)'
        name='costGuess'
        value={formData.costGuess}
        onChange={handleChange}
      />

      <PINInputGroup pinParts={formData.pinParts} setPinParts={setPinParts} />

      <button
        type='submit'
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Submit
      </button>
    </form>
  );
}
