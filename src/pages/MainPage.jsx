import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';

const MainPage = ({ characters }) => {
  return (
    <CharactersList role="list">
      {characters.map(character => (
        <Card key={character.id} id={character.id} img={character.image} name={character.name} />
      ))}
    </CharactersList>
  );
};

const CharactersList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

export default MainPage;
