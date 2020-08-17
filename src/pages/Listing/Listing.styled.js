import styled from 'styled-components';

export const StyledImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

export const StyledAddressCard = styled.div`
  width: 80%;
  margin: 20px auto 0 auto;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const StyledSeparator = styled.div`
  height: 1px;
  max-height: 1px;
  width: 60%;
  margin: auto;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
`;
