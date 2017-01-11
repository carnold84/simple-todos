import uuid from 'uuid';

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        payload: {
            id: uuid.v4(),
            isDone: false,
            text: text,
        },
    };
}

export function removeTodo(id) {
    console.log('removeTodo', id)
    return {
        type: 'REMOVE_TODO',
        payload: id,
    };
}

export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        payload: id,
    };
}