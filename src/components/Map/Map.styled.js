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
  width: 300px;

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
