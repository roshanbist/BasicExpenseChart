import React from 'react';
import './Card.css';

const Card = (props) => {
  const { children, className } = props;

  // another way is by adding className props in {}
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
