import { v4 as uuidv4 } from "uuid";

export function addTodo(text) {
  const date = new Date();
  return {
    type: "ADD_TODO",
    payload: {
      id: uuidv4(),
      isDone: false,
      text: text,
      created: date.getTime(),
    },
  };
}

export function removeTodo(id) {
  return {
    type: "REMOVE_TODO",
    payload: id,
  };
}

export function updateTodo(id, text) {
  return {
    type: "UPDATE_TODO",
    payload: {
      id: id,
      text: text,
    },
  };
}

export function toggleTodo(id) {
  return {
    type: "TOGGLE_TODO",
    payload: id,
  };
}

export function saveAll(todos) {
  return {
    type: "SAVE_ALL",
    payload: todos,
  };
}
