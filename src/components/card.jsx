import styled from 'styled-components';

const Card = ({ img, name }) => {
  return (
    <CardList>
      <CardImg src={img} alt={`Profile Picture ${name}`} />
      <CardName>{name}</CardName>
      <CardButton>show more</CardButton>
    </CardList>
  );
};

const CardList = styled.li`
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

const CardButton = styled.button`
padding: 0.35rem;
margin-bottom: 0.5rem;
font-size: 1rem;
font-weight: 700;
border-radius: 8px;
`

export default Card;
