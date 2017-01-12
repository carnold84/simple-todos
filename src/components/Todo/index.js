import React from 'react';
import styled from 'styled-components';
import checkboxIcon from '../../images/check_box.svg';
import checkboxCheckedIcon from '../../images/check_box_checked.svg';
import deleteIcon from '../../images/delete.svg';

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

const Checkbox = styled.span`
    padding: 0 0 0 10px;
    opacity: 0.5;
    cursor: pointer;
    display: flex;
`;

const Text = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #666666;
    padding: 0 10px;
    flex-grow: 1;
`;

const RemoveButton = styled.button`
    padding: 0 10px;
    border: none;
    background-color: transparent;
    opacity: 0.25;
    cursor: pointer;
    display: flex;

    &:hover {
        opacity: 0.5;
    }
`;

const Todo = (props) => {
    
    const { todo, onClick, onRemoveClick } = props;
    
    let checkbox = checkboxIcon;
    let text = (
        <span>{todo.text}</span>
    );

    if(todo.isDone) {
        checkbox = checkboxCheckedIcon;
        text = (
            <strike>{todo.text}</strike>
        );
    }
    
    return (
        <TodoContainer>
            <Checkbox onClick={onClick}>
                <img src={checkbox} />
            </Checkbox>
            <Text>{text}</Text>
            <RemoveButton onClick={onRemoveClick}>
                <img src={deleteIcon} />
            </RemoveButton>
        </TodoContainer>
    );
}

export default Todo;