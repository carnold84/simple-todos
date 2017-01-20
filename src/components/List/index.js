import React, { Component } from 'react';
import Todo from '../Todo';
import styled from 'styled-components';
import _orderBy from 'lodash/orderBy';

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

class List extends Component {
    
    constructor() {
        super();
        
        this.onSubmit = this.onSubmit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.onToggleClick = this.onToggleClick.bind(this);
        this.onRemoveClick = this.onRemoveClick.bind(this);
        
        this.textInput = undefined;
    }

    onSubmit(event) {
        const input = this.textInput;
        const text = input.value;
        const isEnterKey = (event.which === 13);
        const isLongEnough = text.length > 0;

        if(isEnterKey && isLongEnough) {
          input.value = '';
          this.props.addTodo(text);
        }
    }

    onEditSubmit(id, text) {
        this.props.updateTodo(id, text);
    }

    onToggleClick(id, text) {
        this.props.toggleTodo(id, text);
    }

    onRemoveClick(id) {
        this.props.removeTodo(id);
    }
    
    render() {
    
        const { todos } = this.props;

        const items = _orderBy(todos.toJS(), ['isDone', 'created'], ['asc', 'desc']);

        let content = undefined;

        if (todos.size > 0) {
            content = items.map((todo) => {
                return (
                    <li key={todo.id}>
                        <Todo id={todo.id}
                            text={todo.text}
                            isDone={todo.isDone}
                            onClick={this.onToggleClick}
                            onRemoveClick={this.onRemoveClick}
                            onSave={this.onEditSubmit} />
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
                        ref={(el) => this.textInput = el}
                        onKeyDown={this.onSubmit} />

                </FormContainer>

                <ListContainer>
                    {content}
                </ListContainer>

            </Container>
        );
    }
}

export default List;