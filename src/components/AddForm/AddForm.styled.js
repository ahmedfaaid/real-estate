import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;

  @media (min-width: 426px) {
    width: 500px;
    margin: 20px auto;
    border: 1px solid #cccccc;
    border-radius: 5px;
  }
`;

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
  margin: 10px 0;

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
    margin: 10px auto;
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

  & select {
    display: block;
    font-size: 16px;
    font-weight: 400;
    color: #444;
    line-height: 1.3;
    padding: 10px 22px 8px 12px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 12px top 50%, 0 0;
    background-size: 10px auto, 100%;

    &:focus {
      box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
      box-shadow: 0 0 0 3px -moz-mac-focusring;
      color: #222;
      outline: none;
    }
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
