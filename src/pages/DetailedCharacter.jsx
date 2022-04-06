import React  from 'react';
import { useParams } from 'react-router-dom';
// import Header from './components/header';
// import Navbar from './components/navbar';
import styled from 'styled-components';
import CardButton from '../components/button';

function DetailedCharacter({characters}) {
  const { id } = useParams();
  console.log(characters);
  const currentCharacter = characters.find(character => character.id === Number(id))

    return(
    <CardUl>{currentCharacter ? 
    (<CardLi>
    <CardImg src={currentCharacter.image} alt={`Profile Picture ${currentCharacter.name}`} />
    <CardName>{currentCharacter.name}</CardName>
    <CardButton label='save as favorite' />
    <CardButton label='show more' />
  </CardLi>) : ''
}</CardUl>
);
};

const CardUl = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
`;

const CardLi = styled.li`
list-style: none;
text-align: center;
border: 2px solid #9ef01a;
margin: 0.5rem;
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