import styled from "styled-components";

export const TodoContainer = styled.div`
  height: 44px;
  margin: 0 0 5px;
  border: #f1f1f1 solid 1px;
  border-radius: 22px;
  align-items: stretch;
  display: flex;
  padding: 0 5px;
`;

export const Icon = styled.span`
  align-items: center;
  padding: 0 10px 0 10px;
  cursor: pointer;
  display: flex;

  svg {
    fill: #cccccc;
    height: 22px;
    width: 22px;
  }

  &:hover {
    opacity: 1;

    svg {
      fill: #9c22c3;
    }
  }
`;

export const TextEdit = styled.input`
  background-color: #ffffff;
  height: 100%;
  font-family: "Quicksand", sans-serif;
  font-size: 14px;
  font-size: 500;
  color: #666666;
  padding: 0 10px 0 10px;
  border: none;
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;

  .is-done & {
    color: #cccccc;
    text-decoration: line-through;
  }

  &:hover {
    background-color: #fdf8ff;
    color: #9c22c3;
  }

  &:focus {
    color: #9c22c3;
    outline: none;
  }
`;
