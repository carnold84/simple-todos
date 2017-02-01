import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { List, Map } from 'immutable';
import reducer from './reducers';
import TodoList from './containers/TodoList';
import './index.css';

let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

todos = todos.map((todo) => {
    return Map(todo);
});

let persistedState = List(todos);

const store = createStore(reducer, persistedState);

store.subscribe(()=>{
    localStorage.setItem('todos', JSON.stringify(store.getState()))
});

render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById('app')
);