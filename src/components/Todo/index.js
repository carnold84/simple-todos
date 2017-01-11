import React from 'react';
import styled from 'styled-components';
import deleteIcon from '../../images/ic_delete.svg';

const TodoContainer = styled.div`
    height: 40px;
    margin: 0 0 5px;
    border: #f1f1f1 solid 1px;
    align-items: center;
    display: flex;

    strike {
        color: #cccccc;
    }
`;

const RemoveButton = styled.button`
    padding: 0 10px;
    border: none;
    background-color: transparent;
    display: flex;
`;

const Text = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #666666;
    padding: 0 15px;
    flex-grow: 1;
`;

const Todo = (props) => {
    
    const { todo, onClick, onRemoveClick } = props;
    
    let text;

    if(todo.isDone) {
        text = (
            <strike>{todo.text}</strike>
        );
    } else {
        text = todo.text;
    }
    
    return (
        <TodoContainer>
            <Text onClick={onClick}>{text}</Text>
            <RemoveButton onClick={onRemoveClick}>
                <img src={deleteIcon} />
            </RemoveButton>
        </TodoContainer>
    );
}

export default Todo;