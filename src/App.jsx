import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import DetailedCharacter from './pages/DetailedCharacter';
import MainPage from './pages/MainPage';
import styled from 'styled-components';

function App() {
  const [characters, setCharacters] = useState([]);
  const [favoritesIDs, setFavoritesIDs] = useState(['2', '5', '7']);
  const url = 'https://rickandmortyapi.com/api/character';
  const fetchCharacters = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  
  

  // function handleOnBookmark (currentCharacter) {
  //   const newFavorites = [{...favorites}, {currentCharacter.id}]
  // };

  // function SaveFavorites ({characters}) {
  // const newCharacter
  // };

  return (
    <Grid>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage characters={characters} />} />
          <Route
            path="character/:id"
            element={
              <DetailedCharacter
                characters={characters}
                favoritesIDs={favoritesIDs}
                setFavoritesIDs={setFavoritesIDs}
                // addFavorite={addFavorite}
                // removeFavorite={removeFavorite}
              />
            }
          />
        </Routes>
      </main>
      <Navbar />
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: 2rem 1fr 3rem;
  height: 100vh;
  main {
    overflow-y: scroll;
  }
`;

export default App;
