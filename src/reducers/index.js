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
        
        case 'UPDATE_TODO':
            let id = action.payload.id;
            let text = action.payload.text;
            
            return todos.update(
                todos.findIndex((todo) => { 
                    return todo.get('id') === id; 
                }), (todo) => {
                    return todo.set('text', text);
                }
            );
            
        case 'TOGGLE_TODO':
            return todos.map(todo => {
                if (todo.get('id') === action.payload) {
                    return todo.update('isDone', isDone => !isDone);
                } else {
                    return todo;
                }
            });
            
        case 'SAVE_ALL':
            let ordered = action.payload.map((todo, i) => {
                todo.order = i;
                return Map(todo);
            });
            return List(ordered);
            
        default:
            return todos;
    }
}

export default reducer;