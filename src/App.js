import TodoList from './containers/TodoList';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { useStore } from './store/StoreProvider';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  #app {
    align-items: center;
    flex-direction: column;
    display: flex;
  }
`;

const App = () => {
  const store = useStore();

  return (
    <ThemeProvider theme={store.theme === 'light' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <TodoList />
    </ThemeProvider>
  );
};

export default App;
