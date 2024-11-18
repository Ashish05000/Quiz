import React, { useState } from "react";
import styles from "@/components/Inputs/RadioGroup.module.css";

const RadioGroup = ({ question, options, name, onChange, optionClass = "flex-col", disabled = false }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (value) => {
    if (disabled) return; // Prevent any change if disabled
    setSelectedOption(value);
    if (onChange) onChange(value);
  };

  return (
    <div>
      {question && (
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-3">{question}</p>
      )}
      <div className={`${styles.radioGroup} ${optionClass}`}>
        {options.map((option, index) => (
          <div
            key={index}
            className={`${styles.radioOption} ${
              selectedOption === option.value ? styles.radioOptionSelected : ""
            } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} // Add visual feedback for disabled state
            onClick={() => handleOptionChange(option.value)} // Clicks are ignored if `disabled` is true
          >
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => handleOptionChange(option.value)}
              className={`${styles.radioInput} ${
                selectedOption === option.value ? styles.radioInputChecked : ""
              }`}
              disabled={disabled}
            />
            <label
              htmlFor={`${name}-${option.value}`}
              className={styles.radioLabel}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
