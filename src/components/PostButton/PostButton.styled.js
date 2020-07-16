import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 2.5rem;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.55);
`;