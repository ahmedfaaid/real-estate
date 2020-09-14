import styled from 'styled-components';

export const StyledListing = styled.div`
  display: flex;
  align-items: center;
  margin: 15px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};

  @media (min-width: 1025px) {
    height: 100%;
  }
`;

export const StyledImageContainer = styled.div`
  img {
    width: 100px;
  }
`;

export const StyledDetails = styled.div`
  margin-left: 20px;

  h3 {
    font-size: 14px;
  }

  p {
    font-size: 14px;
  }
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.grey};
  font-style: italic;
`;
