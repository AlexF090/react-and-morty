import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CardButton from '../components/button';

function DetailedCharacter({ characters }) {
  const { id } = useParams();
  console.log(characters);
  const currentCharacter = characters.find(character => character.id === Number(id));

  return (
    <>
      {currentCharacter ? (
        <CardUl>
          <CardLi>
            <CardImg
              src={currentCharacter.image}
              alt={`Profile Picture ${currentCharacter.name}`}
            />
          </CardLi>
          <CardLi>
            <CardName>{currentCharacter.name}</CardName>
          </CardLi>
          <CardLi>
            <CardButton label="save as favorite" />
          </CardLi>
          <CardLi>
            <CardLiSpecs>species: {currentCharacter.species}</CardLiSpecs>
          </CardLi>
          <CardLi>
            <CardLiSpecs>gender: {currentCharacter.gender}</CardLiSpecs>
          </CardLi>
          <CardLi>
            <CardLiSpecs>status: {currentCharacter.status}</CardLiSpecs>
          </CardLi>
        </CardUl>
      ) : (
        ''
      )}
    </>
  );
}

const CardUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #9ef01a;
  margin: 0 auto;
  margin-top: 5rem;
  width: 320px;
`;

const CardLi = styled.li`
  list-style: none;
  text-align: center;
  
  
`;

const CardLiSpecs = styled.li`
  list-style: none;
  text-align: center;
  margin: 0.5rem;
  font-weight: 500;
  text-shadow: 1px 1px 5px #00000062;
`;

const CardImg = styled.img`
  margin: 0 0.5rem;
  margin-top: 0.5rem;
`;

const CardName = styled.h2`
  color: #9ef01a;
  text-shadow: 2px 2px 7px #000000;
  margin: 0.5rem;
`;

export default DetailedCharacter;
