import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeadLine>React and Morty</HeadLine>
      <hr />
    </HeaderWrapper>
  );
};

// const HeaderBox = styled.header`

// `;

const HeaderWrapper = styled.header`
position: sticky;
top: 0;
/* margin-bottom: 1rem; */
`;

const HeadLine = styled.h1`
position: sticky;
  color: #004B23;
  text-align: center;
  text-shadow: 2px 2px 5px #00000069;
  font-size: 2rem;
  background-color: #CCFF33;
  padding: 0.5rem;
`;

export default Header;
