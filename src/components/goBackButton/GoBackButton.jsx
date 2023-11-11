import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoBackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return <button onClick={handleClick}>Go back</button>;
}

export default GoBackButton;
