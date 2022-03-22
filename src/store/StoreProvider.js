import { createContext, useContext, useReducer } from 'react';
import { getData } from '../api';
import {
  addTodo,
  removeTodo,
  saveAll,
  toggleTheme,
  toggleTodo,
  updateTodo,
} from './actions';
import reducer from './reducer';

const StoreContext = createContext();

let initialState = getData() ?? {
  theme: 'light',
  todos: [],
};

export const useStore = () => {
  const { dispatch, state } = useContext(StoreContext);

  return {
    addTodo: (text) => dispatch(addTodo(text)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    updateTodo: (id, text) => dispatch(updateTodo(id, text)),
    toggleTheme: () => dispatch(toggleTheme()),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    saveAll: (todos) => dispatch(saveAll(todos)),
    theme: state.theme,
    todos: state.todos,
  };
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
