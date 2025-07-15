export default function TextInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = true,
  ...rest
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
        onChange={onChange}
        required={required}
        style={{
          padding: "0.5rem",
          width: "100%",
          fontSize: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        {...rest}
      />
    </div>
  );
}
