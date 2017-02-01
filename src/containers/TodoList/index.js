import { connect } from 'react-redux';
import List from '../../components/List';
import { addTodo, removeTodo, updateTodo, toggleTodo, saveAll } from '../../actions';

const mapStateToProps = (state) => {
    return { todos: state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(addTodo(text)),
        removeTodo: (id) => dispatch(removeTodo(id)),
        updateTodo: (id, text) => dispatch(updateTodo(id, text)),
        toggleTodo: (id) => dispatch(toggleTodo(id)),
        saveAll: (todos) => dispatch(saveAll(todos)),
    };
};

const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(List);

export default TodoList;