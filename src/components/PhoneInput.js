export default function PhoneInput({ label, name, value, onChange }) {
  const formatPhone = (input) => {
    const digits = input.replace(/\D/g, "").slice(0, 10);
    const area = digits.slice(0, 3);
    const central = digits.slice(3, 6);
    const line = digits.slice(6, 10);

    let formatted = "";
    if (digits.length > 6) {
      formatted = `(${area})-${central}-${line}`;
    } else if (digits.length > 3) {
      formatted = `(${area})-${central}`;
    } else if (digits.length > 0) {
      formatted = `(${area}`;
    }

    return formatted;
  };

  const handleFormattedChange = (e) => {
    const formatted = formatPhone(e.target.value);
    onChange({ target: { name, value: formatted } });
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label
        htmlFor={name}
        style={{ display: "block", marginBottom: "0.25rem" }}
      >
        {label}:
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={handleFormattedChange}
        placeholder='+1 (___)-___-____'
        required
        style={{
          padding: "0.5rem",
          width: "100%",
          fontSize: "1rem",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
