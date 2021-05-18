import React, { Component } from "react";
import { SortableContainer, arrayMove } from "react-sortable-hoc";
import _orderBy from "lodash/orderBy";
import SortableTodo from "../Todo";
import { Container, FormContainer, ListContainer, ListMessage } from "./styles";

class List extends Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);

    this.textInput = undefined;

    this.items = undefined;
  }

  onSubmit(event) {
    event.preventDefault();

    const input = this.textInput;
    const text = input.value;

    input.value = "";
    this.props.addTodo(text);
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

  onSortEnd({ oldIndex, newIndex }) {
    let orderedItems = arrayMove(this.items, oldIndex, newIndex);

    this.props.saveAll(orderedItems);
  }

  render() {
    this.items = _orderBy(
      this.props.todos.toJS(),
      ["isDone", "order"],
      ["asc", "asc"]
    );

    return (
      <Container>
        <FormContainer onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Add task..."
            ref={(el) => (this.textInput = el)}
          />
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.64295 14.943L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" />
            </svg>
          </button>
        </FormContainer>

        <SortableList
          todos={this.items}
          onSortEnd={this.onSortEnd}
          onSubmit={this.onSubmit}
          onEditSubmit={this.onEditSubmit}
          onToggleClick={this.onToggleClick}
          onRemoveClick={this.onRemoveClick}
          useDragHandle={true}
        />
      </Container>
    );
  }
}

const SortableList = SortableContainer(
  ({ todos, onSubmit, onEditSubmit, onToggleClick, onRemoveClick }) => {
    let content = undefined;

    if (todos.length > 0) {
      content = todos.map((todo, index) => {
        return (
          <SortableTodo
            id={todo.id}
            key={todo.id}
            index={index}
            text={todo.text}
            isDone={todo.isDone}
            onToggleClick={onToggleClick}
            onRemoveClick={onRemoveClick}
            onEditSubmit={onEditSubmit}
          />
        );
      });
    } else {
      content = <ListMessage>No tasks</ListMessage>;
    }

    return <ListContainer>{content}</ListContainer>;
  }
);

export default List;
