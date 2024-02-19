function Checkbox({ children, disabled, checked, onChange }) {
  return (
    <label >
      <input className="body_table_data_checkbox"
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </label>
  );
}

export default Checkbox;