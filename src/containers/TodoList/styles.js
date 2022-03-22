import styled from 'styled-components';

export const ActionButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.actionButton.color};
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  margin: 0 0 0 5px;
  width: 40px;

  &:hover {
    color: ${({ theme }) => theme.actionButton._hover.color};
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 90%;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;
