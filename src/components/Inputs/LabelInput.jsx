import React from "react";
import styles from "./LabelInput.module.css";

const LabelInput = ({ label, name, type = "text", value, onChange, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default LabelInput;
