import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import ClickOutside from '../ClickOutside';
import checkboxIcon from '../../images/check_box.svg';
import checkboxCheckedIcon from '../../images/check_box_checked.svg';
import deleteIcon from '../../images/delete.svg';

const TodoContainer = styled.div`
    height: 40px;
    margin: 0 0 5px;
    border: #f1f1f1 solid 1px;
    align-items: stretch;
    display: flex;
`;

const Checkbox = styled.span`
    padding: 0 10px;
    opacity: 0.25;
    cursor: pointer;
    display: flex;

    &:hover {
        opacity: 0.5;
    }
`;

const TextEdit = styled.input`
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #666666;
    padding: 0 10px;
    border: none;
    flex-grow: 1;
    display: flex;

    .is-done & {
        color: #cccccc;
        text-decoration: line-through;
    }

    &:focus {
        outline: none;
    }
`;

const RemoveButton = styled.button`
    padding: 0 10px;
    border: none;
    background-color: transparent;
    opacity: 0.25;
    cursor: pointer;
    flex-grow: 0;
    display: flex;

    &:hover {
        opacity: 0.5;
    }
`;

const Todo = (props) => {
    
    let classes = classNames({ 'is-done': props.isDone });
    let checkbox = props.isDone ? checkboxCheckedIcon : checkboxIcon;
    
    const onSubmit = (event) => {
        
        const isEnterKey = event.which === undefined || event.which === 13;
        
        if (isEnterKey) {
            
            const target = event.target;
            props.onSave(props.id, target.value);
            target.blur();
        }
    };
    
    return (
        <TodoContainer className={classes}>
            <Checkbox onClick={() => props.onClick(props.id)}>
                <img src={checkbox} role="presentation" />
            </Checkbox>
            <TextEdit
                    onKeyDown={onSubmit}
                    onBlur={onSubmit}
                    defaultValue={props.text} />
            <RemoveButton onClick={() => props.onRemoveClick(props.id)}>
                <img src={deleteIcon} role="presentation" />
            </RemoveButton>
        </TodoContainer>
    );
}

export default Todo;