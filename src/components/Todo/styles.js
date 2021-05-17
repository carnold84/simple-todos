import styled from "styled-components";

export const TodoContainer = styled.div`
  height: 40px;
  margin: 0 0 5px;
  border: #f1f1f1 solid 1px;
  align-items: stretch;
  display: flex;
`;

export const Reorder = styled.span`
  padding: 0 10px 0 10px;
  opacity: 0.15;
  cursor: grab;
  display: flex;

  &:hover {
    opacity: 0.5;
  }
`;

export const Checkbox = styled.span`
  padding: 0 10px 0 0;
  opacity: 0.25;
  cursor: pointer;
  display: flex;

  &:hover {
    opacity: 0.5;
  }
`;

export const TextEdit = styled.input`
  height: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #666666;
  padding: 0 10px;
  border: none;
  flex-grow: 1;
  display: flex;

  .is-done & {
    color: #cccccc;
    text-decoration: line-through;
  }

  &:focus {
    outline: none;
  }
`;

export const RemoveButton = styled.button`
  padding: 0 10px;
  border: none;
  background-color: transparent;
  opacity: 0.15;
  cursor: pointer;
  flex-grow: 0;
  display: flex;

  &:hover {
    opacity: 0.5;
  }
`;
