import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav, StyledButton } from './Navigation.styled';

function Navigation({ menuOpen, setMenuOpen }) {
  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledNav>
      <div style={{ zIndex: 10 }}>
        <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
          LOGO
        </Link>
      </div>
      <StyledButton onClick={menuOpenHandler}>
        <div />
        <div />
        <div />
      </StyledButton>
    </StyledNav>
  );
}

export default Navigation;
