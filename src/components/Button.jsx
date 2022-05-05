import React from 'react';
import styled from 'styled-components';

const Button = ({ myFunction, label, favoritesIDs, currentCharacter }) => {
  console.log(favoritesIDs);
  return (
    <CardButtonStyle
      onClick={myFunction}
      isFavorite={favoritesIDs && favoritesIDs.includes(currentCharacter.id) ? true : false}
    >
      {favoritesIDs && favoritesIDs.includes(currentCharacter.id)
        ? `${currentCharacter.name} is favorite`
        : label}
    </CardButtonStyle>
  );
};

const CardButtonStyle = styled.button`
  padding: 0.35rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 8px;
  background-color: ${props => props.isFavorite && '#9ef01a'};
  border: 0;
  color: #004b23;
  text-shadow: 2px 2px 3px #00000069;
`;

export default Button;
