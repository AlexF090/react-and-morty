import React from 'react';
import Card from '../../src/components/card';
import styled from 'styled-components';

const MainPage = ({ characters }) => {
  return (
    <CharactersList>
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
