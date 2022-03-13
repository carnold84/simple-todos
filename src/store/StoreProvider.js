import { createContext, useContext, useReducer } from 'react';
import {
  addTodo,
  removeTodo,
  saveAll,
  toggleTodo,
  updateTodo,
} from './actions';

const StoreContext = createContext();

const saveState = (state) => {
  localStorage.setItem('simple-todos', JSON.stringify(state));
};

// changed the state model and storage key so check for old todos first
let legacyTodos = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : [];
// then remove the old data
localStorage.removeItem('todos');

const data = localStorage.getItem('simple-todos');
let initialState = data
  ? JSON.parse(data)
  : {
      theme: 'light',
      todos: [],
    };

initialState.todos = [...legacyTodos, ...initialState.todos];

// no data exists so save initial
if (data === null) {
  saveState(initialState);
}

const reducer = (state, action) => {
  let nextState;

  switch (action.type) {
    case 'ADD_TODO':
      nextState = {
        ...state,
        todos: [...state.todos, action.payload],
      };
      saveState(nextState);
      return nextState;

    case 'REMOVE_TODO':
      nextState = {
        ...state,
        todos: state.todos.filter(({ id }) => {
          return id === action.payload;
        }),
      };
      saveState(nextState);
      return nextState;

    case 'UPDATE_TODO':
      let id = action.payload.id;
      let text = action.payload.text;
      nextState = {
        ...state,
        todos: state.todos.map((todo) => {
          if (id === todo.id) {
            return {
              ...todo,
              text,
            };
          }
        }),
      };
      saveState(nextState);

      return nextState;

    case 'TOGGLE_TODO':
      nextState = {
        ...state,
        todos: state.todos.map(({ id, isDone }) => {
          if (id === action.payload) {
            return {
              ...todo,
              isDone: !isDone,
            };
          }
        }),
      };
      saveState(nextState);
      return nextState;

    case 'SAVE_ALL':
      nextState = {
        ...state,
        todos: action.payload.map((todo, i) => {
          todo.order = i;
          return todo;
        }),
      };
      saveState(nextState);
      return nextState;

    default:
      return state;
  }
};

export const useStore = () => {
  const { dispatch, state } = useContext(StoreContext);

  return {
    addTodo: (text) => dispatch(addTodo(text)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    updateTodo: (id, text) => dispatch(updateTodo(id, text)),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    saveAll: (todos) => dispatch(saveAll(todos)),
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
