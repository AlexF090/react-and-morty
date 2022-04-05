import './App.css';
import Header from './components/header';
import Card from './components/card';
import Navbar from './components/navbar';
import styled from 'styled-components';
import GlobalStyle from './style/globalStyles.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
