import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
// import Card from './components/card';
import DetailedCharacter from './pages/DetailedCharacter';
import MainPage from './pages/MainPage';
import styled from 'styled-components';

function App() {
  const [characters, setCharacters] = useState([]);
  const url = 'https://rickandmortyapi.com/api/character';
console.log(characters);
  const fetchCharacters = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);




  return (
    <Grid>
      <Header />
      <main>
      <Routes>
      <Route path="/" element={<MainPage characters={characters} />} />
        <Route path="character/:id" element={<DetailedCharacter characters={characters} />} />
      </Routes>
      </main>
      <Navbar />
    </Grid>
  );
}

const Grid = styled.div`
display: grid;
grid-template-rows: 150px 1fr 2.75rem;
height: 100vh;
main {
  overflow-y: scroll;
}
`;

export default App;
