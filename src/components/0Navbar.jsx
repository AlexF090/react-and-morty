import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <FooterWrapper>
      <nav>
        <hr />
        <NavWrapper>
          <NavLinkStyled to="/">
            <li>Home</li>
          </NavLinkStyled>
          <NavLinkStyled to="/favorites">
            <li>Favorite</li>
          </NavLinkStyled>
          <NavLinkStyled to="/random_character">
            <li>Random</li>
          </NavLinkStyled>
          <li>Other</li>
        </NavWrapper>
      </nav>
    </FooterWrapper>
  );
};

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #004b23;
  &.active {
    text-decoration: none;
    text-shadow: 2px 2px 2.5px #000000cb;
  }
`;

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0px;
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
  color: #004b23;
  text-shadow: 2px 2px 5px #00000069;
  font-weight: 700;
  font-size: 1.25rem;
  list-style-type: none;
  text-decoration: none;
`;

export default Navbar;
