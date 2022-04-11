// import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CardDetailedCharacter from '../components/CardDetailedCharacter';

function DetailedCharacterPage({ characters, favoritesIDs, setFavoritesIDs }) {
  const { id } = useParams();
  const currentCharacter = characters.find(character => character.id === Number(id));
  

  //Function to add or remove favorites to/from useState array
  const saveFavorites = () => {
    if (favoritesIDs.includes(currentCharacter.id)) {
      const updatedFavoriteIDs = favoritesIDs.filter(favoriteID => favoriteID !== currentCharacter.id);
      setFavoritesIDs(updatedFavoriteIDs);
      
    } else {
      setFavoritesIDs([...favoritesIDs, currentCharacter.id]);
      
    }
  };


  return (
    <>
      {currentCharacter ? (
        <CardDetailedCharacter
          id={currentCharacter.id}
          characters={characters}
          currentCharacter={currentCharacter}
          favoritesIDs={favoritesIDs}
          saveFavorites={saveFavorites}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default DetailedCharacterPage;