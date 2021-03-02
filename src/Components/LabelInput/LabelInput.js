import React from "react";
import "./LabelInput.style.css";

function LabelInput({ name, type, id, htmlFor, value, onChange }) {
  return (
    <div className="labelInput">
      <label className="labelInput__label" htmlFor={htmlFor}>
        {name}
      </label>
      <input
        className="labelInput__input"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default LabelInput;
