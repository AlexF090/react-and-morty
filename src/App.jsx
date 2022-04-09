import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import MainPage from './pages/MainPage';
import DetailedCharacter from './pages/DetailedCharacter';
import FavoritesPages from './pages/FavoritePage';
import styled from 'styled-components';

function App() {
  const [characters, setCharacters] = useState([]);
  //favoritesIDs default: Wandelt string in JS-Objekt/Array (Wo: aus dem localStorage.nehmen(Dateiname:favoritesIDS)) or empty array
  const [favoritesIDs, setFavoritesIDs] = useState(
    JSON.parse(localStorage.getItem('favoritesIDs')) || []
  );
  const url = 'https://rickandmortyapi.com/api/character';

  // Fetch Data
  const fetchCharacters = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  };
  useEffect(() => {
    fetchCharacters(url);
  }, []);

  //Save Favorites in LocalStorage
  useEffect(() => {
    localStorage.setItem('favoritesIDs', JSON.stringify(favoritesIDs));
  }, [favoritesIDs]);



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
          <Route
            path="/favorites"
            element={
              <FavoritesPages
                characters={characters}
                favoritesIDs={favoritesIDs}
                setFavoritesIDs={setFavoritesIDs}
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
