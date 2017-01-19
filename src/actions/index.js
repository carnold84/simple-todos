import uuidV4 from 'uuid/v4';

export function addTodo(text) {
    const date = new Date();
    return {
        type: 'ADD_TODO',
        payload: {
            id: uuidV4(),
            isDone: false,
            text: text,
            created: date.getTime(),
        },
    };
}

export function removeTodo(id) {
    return {
        type: 'REMOVE_TODO',
        payload: id,
    };
}

export function updateTodo(id, text) {
    return {
        type: 'UPDATE_TODO',
        payload: {
            id: id,
            text: text,
        },
    };
}

export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        payload: id,
    };
}