import React  from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <FooterWrapper>
      <nav>
        <hr />
        <NavWrapper>
          <li>Home</li>
          <li>Favorite</li>
          <li>Random</li>
          <li>Other</li>
        </NavWrapper>
      </nav>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: sticky;
  bottom: 0;
  margin-top: 0.5rem;
`;

const NavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 0.25rem;
  width: 100vw;
  padding: 0.5rem 0rem;

  background-color: #9ef01a;
  color: #004B23;
  text-shadow: 2px 2px 5px #00000069;
  font-weight: 700;
  list-style-type: none;
  text-decoration: none;
`;

export default Navbar;
