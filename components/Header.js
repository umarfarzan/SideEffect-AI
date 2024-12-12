import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  color: white;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  &:hover {
    color: white;
  }
`;

const LoginButton = styled.a`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo>SIDE-EFFECT</Logo>
        <NavLinks>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <LoginButton href="#login">Login</LoginButton>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;

