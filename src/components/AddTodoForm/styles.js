import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  margin: 20px 0;
  position: relative;

  input {
    align-items: center;
    background-color: ${({ theme }) => theme.input.bgColor};
    border: 1px solid ${({ theme }) => theme.input.borderColor};
    border-radius: 20px;
    color: ${({ theme }) => theme.input.color};
    display: flex;
    font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    height: 40px;
    outline: none;
    padding: 0 46px 0 16px;
    width: 100%;
    z-index: 0;

    &:focus {
      border-color: ${({ theme }) => theme.input._focus.borderColor};
    }
  }

  button {
    align-items: center;
    background-color: ${({ theme }) => theme.submitButton.bgColor};
    border: 2px solid ${({ theme }) => theme.submitButton.borderColor};
    border-radius: 15px;
    color: ${({ theme }) => theme.submitButton.color};
    cursor: pointer;
    display: flex;
    font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    height: 30px;
    justify-content: center;
    padding: 0 3px 0 4px;
    position: absolute;
    right: 5px;
    top: 5px;
    z-index: 1;

    svg {
      fill: ${({ theme }) => theme.submitButton.fill};
      margin: 0;
    }

    &:hover {
      background-color: ${({ theme }) => theme.submitButton._hover.bgColor};
      border: 2px solid ${({ theme }) => theme.submitButton._hover.borderColor};
      color: #ffffff;

      svg {
        fill: ${({ theme }) => theme.submitButton._hover.fill};
      }
    }

    @media (min-width: 768px) {
      svg {
        margin: 0 2px 0 0;
      }
    }
  }
`;
