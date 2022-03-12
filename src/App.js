import StoreProvider from './store/StoreProvider';
import TodoList from './containers/TodoList';

const App = () => {
  return (
    <StoreProvider>
      <TodoList />
    </StoreProvider>
  );
};

export default App;
