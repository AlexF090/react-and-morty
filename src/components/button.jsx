import React from 'react';
import styled from 'styled-components';

const CardButton = ({ myFunction, label }) => {
  return <CardButtonStyle onClick={myFunction}>{label}</CardButtonStyle>;
};

const CardButtonStyle = styled.button`
  padding: 0.35rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 8px;
  background-color: #9ef01a;
  border: 0;
  color: #004b23;
  text-shadow: 2px 2px 3px #00000069;
`;

export default CardButton;
