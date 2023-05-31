export const saveData = (state) => {
  localStorage.setItem('simple-todos', JSON.stringify(state));
};

export const getData = () => {
  return JSON.parse(localStorage.getItem('simple-todos'));
};

// changed the state model and storage key so check for old todos first
let legacyTodos = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : [];
// then remove the old data
localStorage.removeItem('todos');

const data = getData();

// no data exists so save initial
if (data === null) {
  saveData({
    theme: 'light',
    todos: [...legacyTodos],
  });
}
