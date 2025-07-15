export default function TextInput({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
}) {
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
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        style={{
          padding: "0.5rem",
          width: "100%",
          fontSize: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}
