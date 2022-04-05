import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import styled from 'styled-components';
import Card from './components/card';

// const Card = ({ img, name }) => {
//   return (
//     <li>
//       <img src={img} alt={`Profile Picture ${name}`} />
//       <h2>{name}</h2>
//       <button></button>
//     </li>
//   );
// };

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
