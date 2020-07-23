import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav, StyledButton } from './Navigation.styled';

function Navigation() {
  return (
    <StyledNav>
      <div>
        <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
          LOGO
        </Link>
      </div>
      <StyledButton>
        <div />
        <div />
        <div />
      </StyledButton>
    </StyledNav>
  );
}

export default Navigation;
