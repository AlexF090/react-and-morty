import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Card from './components/card';
import styled from 'styled-components';



function App() {
  const [characters, setCharacters] = useState([]);
  const url = 'https://rickandmortyapi.com/api/character';

  const fetchCharacters = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <>
      <Header />
      <Main>
        <ul>
          {characters.map(character => (
            <Card key={character.id} img={character.image} name={character.name} />
          ))}
        </ul>
      </Main>
      <Navbar />
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

export default App;
