import React from 'react';
import { useNavigate } from 'react-router-dom';

import css from './GoBackButton.module.css';

function GoBackButton(props) {
  const { from } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(from);
  };
  return (
    <button className={css.goBack} onClick={handleClick}>
      Go back
    </button>
  );
}

export default GoBackButton;
