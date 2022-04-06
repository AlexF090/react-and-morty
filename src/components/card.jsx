import React  from 'react';
import styled from 'styled-components';
import CardButton from './button';


const Card = ({ img, name }) => {
  return (
    <CardContainer>
      <CardImg src={img} alt={`Profile Picture ${name}`} />
      <CardName>{name}</CardName>
      <CardButton label='show more'/>
    </CardContainer>
  );
};

const CardContainer = styled.li`
  list-style: none;
  text-align: center;
  border: 2px solid #9ef01a;
  margin: 0.5rem;
`;

const CardImg = styled.img`
margin: 0 0.5rem;
margin-top: 0.5rem
`;

const CardName = styled.h2`
  color: #9ef01a;
  text-shadow: 2px 2px 7px #000000;
  margin: 0.5rem;
`;

export default Card;
