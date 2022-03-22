import styled from 'styled-components';

export const TodoContainer = styled.div`
  align-items: stretch;
  background-color: ${({ theme }) => theme.todoItem.bgColor};
  border: 1px solid ${({ theme }) => theme.todoItem.borderColor};
  border-radius: 22px;
  display: flex;
  height: 44px;
  margin: 0 0 5px;
  padding: 0 5px;
`;

export const Icon = styled.span`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 0 10px 0 10px;

  svg {
    fill: ${({ theme }) => theme.todoItem.icon.fill};
    height: 20px;
    width: 20px;
  }

  &:hover {
    opacity: 1;

    svg {
      fill: ${({ theme }) => theme.todoItem.icon._hover.fill};
    }
  }
`;

export const TextEdit = styled.input`
  background-color: ${({ theme }) => theme.todoItem.bgColor};
  border: none;
  color: ${({ isDone, theme }) =>
    isDone ? theme.todoItem._done.color : theme.todoItem.color};
  display: flex;
  height: 100%;
  flex-grow: 1;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 0 10px 0 10px;
  text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
  text-overflow: ellipsis;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.todoItem._hover.bgColor};
    color: ${({ theme }) => theme.todoItem._hover.color};
    outline: none;
  }
`;
