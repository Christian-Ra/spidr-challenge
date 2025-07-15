// components/PINInputGroup.js
import { useRef } from "react";

export default function PINInputGroup({ pinParts, setPinParts }) {
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handlePinChange = (index, value) => {
    if (!/^\d{0,4}$/.test(value)) return;
    const updated = [...pinParts];
    updated[index] = value;
    setPinParts(updated);

    if (value.length === 4 && index < 3) {
      refs[index + 1].current?.focus();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        margin: "0.5rem 0",
        verticalAlign: "center",
      }}
    >
      <label style={{ marginBottom: "0.25rem" }}>Super Secret Spidr PIN:</label>
      {pinParts.map((part, i) => (
        <input
          key={i}
          ref={refs[i]}
          type='password'
          inputMode='numeric'
          maxLength={4}
          value={part}
          onChange={(e) => handlePinChange(i, e.target.value)}
          style={{
            width: "60px",
            textAlign: "center",
            fontSize: "1.0rem",
            padding: "0.5rem",
          }}
          required
        />
      ))}
    </div>
  );
}
