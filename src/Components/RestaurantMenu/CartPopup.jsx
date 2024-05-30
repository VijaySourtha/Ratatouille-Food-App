import React, { useState, useEffect, useRef } from 'react';

const CartPopup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={`popup ${isOpen ? 'open' : 'closed'}`}>
      <div className="popup-content" ref={popupRef}>
        <h2>This is a popup!</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartPopup;
