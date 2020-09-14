import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSideMenu = styled.aside`
  display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.red};
  text-align: center;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ menuOpen }) =>
    menuOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 769px) {
    width: 340px;
    text-align: left;
  }

  ul {
    padding: 0;
  }

  & li {
    padding: 20px 0;
    list-style: none;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
`;
