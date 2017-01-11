import { List, Map } from 'immutable';

const init = List([]);

const reducer = (todos = init, action) => {
    
    switch(action.type) {
        
        case 'ADD_TODO':
            return todos.push(Map(action.payload));
        
        case 'REMOVE_TODO':
            let index = undefined;
            todos.forEach((todo, i) => {
                if (todo.get('id') === action.payload) {
                    index = i;
                }
            });
            return todos.delete(index);
            
        case 'TOGGLE_TODO':
            return todos.map(todo => {
                if (todo.get('id') === action.payload) {
                    return todo.update('isDone', isDone => !isDone);
                } else {
                    return todo;
                }
            });
            
        default:
            return todos;
    }
}

export default reducer;