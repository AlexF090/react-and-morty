import React, { useState } from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import Button from '../components/Button';

const RandomPage = () => {
  const [randomCharacter, setRandomCharacter] = useState(null);

  //Random URL/Character
  const getRndChar = () => {
    const url = `https://rickandmortyapi.com/api/character/`;
    const rndInd = Math.floor(Math.random() * 825) + 1;
    fetch(url + rndInd)
      .then(response => response.json())
      .then(data => setRandomCharacter(data));
  };

  return (
    <CharactersList role="list">
      <Button
        label="Get Random Character &#10227;"
        myFunction={() => {
          getRndChar();
        }}
      />
      {randomCharacter ? (
        <Card
          key={randomCharacter.id}
          id={randomCharacter.id}
          img={randomCharacter.image}
          name={randomCharacter.name}
        />
      ) : (
        <>
          <Sign>&#9757;</Sign>
          <p>Click the "Random &#10227;" button!</p>
        </>
      )}
    </CharactersList>
  );
};

const CharactersList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

const Sign = styled.div`
  font-size: 5rem;
  color: white;
`;

export default RandomPage;
