import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import '../src/style/App.css';
import '../src/style/globalCSS.css';
// import styled from 'styled-components';
//Components
import Header from './components/Header';
import Navbar from './components/Navbar';
//Pages
import MainPage from './pages/MainPage';
import DetailedCharacterPage from './pages/DetailedCharacterPage';
import FavoritesPage from './pages/FavoritesPages';
import RandomPage from './pages/RandomPage';

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
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage characters={characters} />} />
          <Route
            path="favorites"
            element={
              <FavoritesPage
                characters={characters}
                favoritesIDs={favoritesIDs}
                setFavoritesIDs={setFavoritesIDs}
              />
            }
          />
          <Route
            path="character/:id"
            element={
              <DetailedCharacterPage
                characters={characters}
                favoritesIDs={favoritesIDs}
                setFavoritesIDs={setFavoritesIDs}
              />
            }
          />
          <Route
            path="random_character"
            element={
              <RandomPage />
            }
          />
        </Routes>
      </main>
      <Navbar />
    </>
  );
}

// const Grid = styled.div`
//   display: grid;
//   grid-template-rows: 2rem 1fr 3rem;
//   height: 100vh;
//   main {
//     overflow-y: scroll;
//   }
// `;

export default App;
