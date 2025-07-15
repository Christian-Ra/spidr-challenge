// components/CurrencyInput.js
import Cleave from "cleave.js/react";

export default function CurrencyInput({ label, name, value, onChange }) {
  const handleCleaveChange = (e) => {
    onChange({ target: { name, value: e.target.value } });
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label
        htmlFor={name}
        style={{ display: "block", marginBottom: "0.25rem", color: "#fff" }}
      >
        {label}:
      </label>
      <Cleave
        id={name}
        name={name}
        value={value}
        onChange={handleCleaveChange}
        placeholder='$0.00'
        options={{
          numeral: true,
          numeralThousandsGroupStyle: "thousand",
          prefix: "$",
          rawValueTrimPrefix: true,
          numeralDecimalScale: 2,
          numeralPositiveOnly: true,
        }}
        required
        style={{
          //   backgroundColor: "#25292C",
          color: "#fff",
          padding: "0.5rem",
          width: "100%",
          fontSize: "1rem",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
