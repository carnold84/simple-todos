import styled from 'styled-components';

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
