import React from 'react';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../images/icon-back.png';
import './BackButton.css';

const BackButton = ({ className = '', imgClassName = '', alt = 'Wstecz' }) => {
  const navigate = useNavigate();

  return (
    <button
      type='button'
      className={`back-button ${className}`}
      onClick={() => navigate(-1)}
    >
      <img src={backArrow} alt={alt} className={imgClassName} />
    </button>
  );
};

export default BackButton;
