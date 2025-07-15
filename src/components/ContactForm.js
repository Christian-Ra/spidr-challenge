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
      className='form-container'
      onSubmit={handleSubmit}
      style={{
        padding: "2rem",
        backgroundColor: "#57A5B5",
        color: "#fff", // white text
        width: "800px",
        margin: "auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      <h1
        style={{
          paddingBottom: "2rem",
          textAlign: "center",
          fontWeight: "normal",
        }}
      >
        Be the first in line for Spidr's new air fryr!
      </h1>

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
        style={{
          display: "block",
          margin: "2rem auto 0", // center the button
          padding: "0.75rem 2rem",
          backgroundColor: "transparent",
          color: "#fff",
          border: "2px solid #fff",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseOver={(e) => {
          e.target.style.borderColor = "#3E7D8A";
          e.target.style.backgroundColor = "#1D3C43";
          e.target.style.color = "#3E7D8A";
        }}
        onMouseOut={(e) => {
          e.target.style.borderColor = "#fff";
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#fff";
        }}
      >
        Submit
      </button>
    </form>
  );
}
