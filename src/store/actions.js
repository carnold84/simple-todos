import { v4 as uuidv4 } from 'uuid';

export const addTodo = (text) => {
  const date = new Date();
  return {
    type: 'ADD_TODO',
    payload: {
      id: uuidv4(),
      isDone: false,
      text: text,
      created: date.getTime(),
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    payload: id,
  };
};

export const updateTodo = (id, text) => {
  return {
    type: 'UPDATE_TODO',
    payload: {
      id: id,
      text: text,
    },
  };
};

export const toggleTheme = () => {
  return {
    type: 'TOGGLE_THEME',
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
};

export const saveAll = (todos) => {
  return {
    type: 'SAVE_ALL',
    payload: todos,
  };
};
