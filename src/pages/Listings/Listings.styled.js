import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledListingsContainer = styled.div`
  display: block;
  padding: 0 20px;

  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
`;

export const StyledListingLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: inherit;

  @media (min-width: 1025px) {
    height: 100%;
  }
`;
