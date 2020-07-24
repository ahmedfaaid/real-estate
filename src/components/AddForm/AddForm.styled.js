import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 20px;
`;

export const StyledFileBtn = styled.div`
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100px;
  margin: 30px auto 50px auto;

  & label {
    display: block;
    color: ${({ theme }) => theme.red};

    & svg {
      font-size: 50px;
    }

    & span {
      display: block;
      margin-top: 10px;
    }
  }

  & input[type='file'] {
    font-size: 100px;
    width: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
`;

export const StyledField = styled.div`
  margin: 15px 0;

  & label {
    display: block;
    padding: 0 5px;
    margin-bottom: 10px;
  }

  & input {
    display: block;
    outline: none;
    border: none;
    border-bottom: 1px solid #cccccc;
    width: 100%;
    margin: auto;
    padding: 10px 5px;
  }

  & textarea {
    display: block;
    outline: none;
    border: 1px solid ##cccccc;
    border-radius: 5px;
    width: 100%;
    height: 200px;
    padding: 10px 5px;
  }
`;

export const StyledSubmit = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 2.5rem;
  display: block;
  width: min-content;
  margin: 30px auto 0 auto;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.55);
  text-decoration: none;
`;
