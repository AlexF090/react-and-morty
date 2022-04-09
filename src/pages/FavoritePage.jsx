import React from 'react';
import Card from '../../src/components/card';
import styled from 'styled-components';

const FavoritesPages = ({ characters, favoritesIDs }) => {
  // console.clear();
  console.log(typeof characters.id);

  return (
    <CharactersList role="list">
      {characters.filter(character => favoritesIDs.includes(character.id)).map(character => (
        <Card key={character.id} id={character.id} img={character.image} name={character.name} />
      ))}

{/* {favoritesIDs.length>0 ? (characters.map(character =>
          favoritesIDs.includes(character.id) ? (
            <Card
              key={character.id}
              id={character.id}
              img={character.image}
              name={character.name}
              // gender={character.gender}
              // species={character.species}
              // status={character.status}
              // location={character.location.name}
              // origin={character.origin.name}
              // detailsMode={true}
              // bookmarking={true}
              // handleBookmarking={() => handleBookmarking(character.id)}
              // isbookmarked={favcharacterIDs.includes(character.id)}
            />
          ) : (
            ''
          )
        )) : ( <p>You don't have any favorites set, yet.</p> ) 
        } */}





    </CharactersList>
  );
};
  


const CharactersList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

export default FavoritesPages;
