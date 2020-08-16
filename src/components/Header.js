import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation/Navigation';
import SideMenu from './SideMenu/SideMenu';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.red};
  max-width: 100%;
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledHeader>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideMenu menuOpen={menuOpen} />
    </StyledHeader>
  );
}

export default Header;
