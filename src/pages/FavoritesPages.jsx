import React from 'react';
import Card from '../components/card';
import styled from 'styled-components';

const FavoritesPage = ({ characters, favoritesIDs }) => {
  // const [favoriteCharacters, setfavoriteCharacters] = useState();
  
  // console.clear();
  // console.log(typeof characters.id);

  return (
    <CharactersList role="list">
      {characters.filter(character => favoritesIDs.includes(character.id)).map(character => (
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

export default FavoritesPage;
