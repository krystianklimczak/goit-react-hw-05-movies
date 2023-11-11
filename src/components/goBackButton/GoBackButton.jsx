import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoBackButton(props) {
  const { from } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(from);
  };
  return <button onClick={handleClick}>Go back</button>;
}

export default GoBackButton;
