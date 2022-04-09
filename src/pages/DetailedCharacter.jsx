// import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CardDetailedCharacter from '../components/cardDetailedCharacter';

function DetailedCharacter({ characters, favoritesIDs, setFavoritesIDs }) {
  const { id } = useParams();
  const currentCharacter = characters.find(character => character.id === Number(id));
  // const [favoButtonText, setFavoButtonText] = useState(favoButtonText);

  //Function to add or remove favorites to/from useState array
  const saveFavorites = () => {
    if (favoritesIDs.includes(currentCharacter.id)) {
      const updatedFavoriteIDs = favoritesIDs.filter(favoriteID => favoriteID !== currentCharacter.id);
      setFavoritesIDs(updatedFavoriteIDs);
      // setFavoButtonText('Add To Favorites');
    } else {
      setFavoritesIDs([...favoritesIDs, currentCharacter.id]);
      // setFavoButtonText('Is in Favorites');
    }
  };
  console.log(favoritesIDs);

  // const handleEvent = () => {
  //   setFavoButtonText("Is in Favorites");
  //       setFavoButtonText("Add To Favorites");

  // };

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

// const CardUl = styled.ul`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: 2px solid #9ef01a;
//   margin: 0 auto;
//   margin-top: 5rem;
//   width: 320px;
// `;

// const CardLi = styled.li`
//   list-style: none;
//   text-align: center;
// `;

// const CardLiSpecs = styled.li`
//   list-style: none;
//   text-align: center;
//   margin: 0.5rem;
//   font-weight: 500;
//   text-shadow: 1px 1px 5px #00000062;
// `;

// const CardImg = styled.img`
//   margin: 0 0.5rem;
//   margin-top: 0.5rem;
// `;

// const CardName = styled.h2`
//   color: #9ef01a;
//   text-shadow: 2px 2px 7px #000000;
//   margin: 0.5rem;
// `;

export default DetailedCharacter;
