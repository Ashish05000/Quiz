import React from "react";
import styles from "@/components/ui/Modal.module.css"; // CSS Module for custom styles

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Return nothing if the modal is not open

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <button onClick={onClose} className={styles.closeButton}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
