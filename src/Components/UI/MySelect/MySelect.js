import React from "react";

const MySelect = ({ options, defaultValue, onChange, value }) => {
  return (
    <select
      className="form-select ms-2"
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="val">
        {defaultValue}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
