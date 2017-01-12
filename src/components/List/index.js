import React from 'react';
import Todo from '../Todo';
import styled from 'styled-components';

const Container = styled.section`
    width: 90%;
    max-width: 800px;
    flex-direction: column;
    display: flex;
`;

const FormContainer = styled.section`
    position: relative;
    padding: 20px 0;
    display: flex;

    input {
        width: 100%;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        padding: 12px 16px;
        border: none;
        box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);
        outline: none;
        display: flex;

        &:focus {
            border-color: #cccccc;
        }
    }
`;

const ListContainer = styled.ul`
    padding: 0;
    margin: 0 0 20px;
    list-style: none;
    flex-direction: column;
    display: flex;
`;

const ListMessage = styled.li`
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    text-align: center;
    color: #999999;
    padding: 12px 16px;
`;

const List = (props) => {
    const { todos, toggleTodo, addTodo, removeTodo } = props;
    
    const items = todos.sort((a, b) => {
        return a.get('isDone') - b.get('isDone');
    });
    
    let textInput = undefined;

    const onSubmit = (event) => {
        const input = textInput;
        const text = input.value;
        const isEnterKey = (event.which === 13);
        const isLongEnough = text.length > 0;

        if(isEnterKey && isLongEnough) {
          input.value = '';
          addTodo(text);
        }
    };

    const onClickSubmit = (event) => {
        const input = textInput;
        const text = input.value;
        input.value = '';
        addTodo(text);
    };

    const toggleClick = (id) => {
        toggleTodo(id);
    };
    
    const removeClick = (id) => {
        removeTodo(id);
    };
    
    let content = undefined;
    
    if (todos.size > 0) {
        content = items.map((todo) => {
            return (
                <li key={todo.get('id')}>
                    <Todo todo={todo.toJS()}
                        onClick={() => toggleClick(todo.get('id'))}
                        onRemoveClick={() => removeClick(todo.get('id'))} />
                </li>
            );
        });
    } else {
        content = (
            <ListMessage>No tasks</ListMessage>
        );
    }

    return (
        <Container>

            <FormContainer>
        
                <input type='text'
                    placeholder='Add task...'
                    ref={(el) => textInput = el}
                    onKeyDown={onSubmit} />
                    
            </FormContainer>

            <ListContainer>
                {content}
            </ListContainer>

        </Container>
    );
}

export default List;