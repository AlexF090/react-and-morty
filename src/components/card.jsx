import styled from 'styled-components';

const Card = () => {
  return (
    <CardStyle>
      <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Profile Pic" />
      <h2>Morty Smith</h2>
    </CardStyle>
  );
};


const CardStyle = styled.article`
color:#9EF01A;
text-shadow: 2px 2px 7px #000000;

`



export default Card;
