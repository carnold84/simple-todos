import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  max-width: 800px;
  flex-direction: column;
  display: flex;
`;

export const FormContainer = styled.form`
  margin: 20px 0;
  position: relative;
  display: flex;

  input {
    align-items: center;
    background-color: #f9f9f9;
    font-family: "Quicksand", sans-serif;
    font-size: 14px;
    font-size: 500;
    color: #222222;
    height: 40px;
    padding: 0 16px;
    border: 1px solid #eeeeee;
    border-radius: 20px;
    outline: none;
    display: flex;
    width: 100%;
    z-index: 0;

    &:focus {
      border-color: #cccccc;
    }
  }

  button {
    align-items: center;
    background-color: #f9f9f9;
    border: 2px solid #eeeeee;
    border-radius: 15px;
    color: #666666;
    cursor: pointer;
    display: flex;
    font-family: "Quicksand", sans-serif;
    font-size: 14px;
    font-size: 500;
    height: 30px;
    justify-content: center;
    padding: 0 3px;
    position: absolute;
    right: 5px;
    top: 5px;
    z-index: 1;

    svg {
      fill: #666666;
      margin: 0;
    }

    span {
      display: none;
    }

    &:hover {
      background-color: #9c22c3;
      border: 2px solid #9c22c3;
      color: #ffffff;

      svg {
        fill: #ffffff;
      }
    }

    @media (min-width: 768px) {
      padding: 0 10px 0 5px;

      svg {
        margin: 0 2px 0 0;
      }

      span {
        display: inline;
      }
    }
  }
`;

export const ListContainer = styled.div`
  padding: 0;
  margin: 0 0 20px;
  list-style: none;
  flex-direction: column;
  display: flex;
`;

export const ListMessage = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  font-size: 500;
  text-align: center;
  color: #999999;
  padding: 12px 16px;
`;
