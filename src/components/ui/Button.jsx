import React from "react";
import styles from "@/components/ui/Button.module.css";

const Button = ({
  text,               // Text to display on the button
  onClick,            // Function to handle click event
  type = "button",    // Default type is 'button' (can also be 'submit' or 'reset')
  color = "primary",  // Default color is 'primary'
  size = "medium",    // Default size is 'medium'
  className = "",     // Custom class for additional styling
  disabled = false,   // Prop to handle disabled state
  border = false,     // New prop for border button style
}) => {
  // Dynamically assign classes based on props
  const buttonSize = styles[`button${size.charAt(0).toUpperCase() + size.slice(1)}`] || styles.buttonMedium;
  const buttonColor = styles[`button${color.charAt(0).toUpperCase() + color.slice(1)}`] || styles.buttonPrimary;

  // Class to handle the disabled state
  const disabledClass = disabled ? styles.buttonDisabled : '';

  // Class to apply border style if border prop is passed
  const borderClass = border ? styles.buttonBorder : '';

  // Prevent click event if the button is disabled
  const handleClick = (event) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${styles.button} ${buttonSize} ${buttonColor} ${disabledClass} ${borderClass} ${className}`}
      disabled={disabled} // Disable the button
    >
      {text}
    </button>
  );
};

export default Button;
