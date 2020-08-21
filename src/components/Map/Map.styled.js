import styled from 'styled-components';

export const StyledMarker = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  & svg {
    color: ${({ theme }) => theme.red};
  }
`;

export const StyledPopup = styled.div`
  width: 320px;
  padding: 10px;
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-column-gap: 10px;
  align-items: center;
  border-radius: 20px;

  & h3 {
    font-size: 16px;
  }

  & h4 {
    font-size: 14px;
    fonst-style: italics;
    color: ${({ theme }) => theme.grey};
  }

  & p {
    font-size: 14px;
  }
`;
