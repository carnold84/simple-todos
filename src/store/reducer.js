import { saveData } from '../api';

const reducer = (state, action) => {
  let nextState;

  switch (action.type) {
    case 'ADD_TODO':
      nextState = {
        ...state,
        todos: [...state.todos, action.payload],
      };
      saveData(nextState);
      return nextState;

    case 'REMOVE_TODO':
      nextState = {
        ...state,
        todos: state.todos.filter(({ id }) => {
          return id !== action.payload;
        }),
      };
      saveData(nextState);
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
          return todo;
        }),
      };
      saveData(nextState);

      return nextState;

    case 'TOGGLE_THEME':
      nextState = {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
      saveData(nextState);
      return nextState;

    case 'TOGGLE_TODO':
      nextState = {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          }
          return todo;
        }),
      };
      saveData(nextState);
      return nextState;

    case 'SAVE_ALL':
      nextState = {
        ...state,
        todos: action.payload.map((todo, i) => {
          todo.order = i;
          return todo;
        }),
      };
      saveData(nextState);
      return nextState;

    default:
      return state;
  }
};

export default reducer;
