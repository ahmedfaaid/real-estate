import React from 'react';
import { StyledSideMenu, StyledLink } from './SideMenu.styled';

export default function SideMenu({ menuOpen }) {
  return (
    <StyledSideMenu menuOpen={menuOpen}>
      <ul>
        <li>
          <StyledLink to='/add'>Add A Listing</StyledLink>
        </li>
        <li>
          <StyledLink to='/listings'>View All Listings</StyledLink>
        </li>
        <li>
          <StyledLink to='/help'>Help</StyledLink>
        </li>
      </ul>
    </StyledSideMenu>
  );
}
