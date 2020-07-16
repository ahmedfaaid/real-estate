import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation/Navigation';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.red};
`;

function Header() {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  )
}

export default Header
