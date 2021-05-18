import React from "react";
import { SortableElement, SortableHandle } from "react-sortable-hoc";
import { TodoContainer, Icon, TextEdit } from "./styles";

const Todo = (props) => {
  let classes = [];

  if (props.isDone) {
    classes.push("is-done");
  }

  const onSubmit = (event) => {
    const isEnterKey = event.which === undefined || event.which === 13;

    if (isEnterKey) {
      const target = event.target;
      props.onSave(props.id, target.value);
      target.blur();
    }
  };

  const DragHandle = SortableHandle(() => {
    return (
      <Icon style={{ cursor: "grab" }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z" />
        </svg>
      </Icon>
    );
  });

  return (
    <TodoContainer className={classes.join(" ")}>
      <DragHandle />
      <Icon
        onClick={() => props.onClick(props.id)}
        style={{ padding: "0 5px 0 5px" }}
      >
        {props.isDone ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57929 16.4087 4 11.992 4C7.57528 4 3.99421 7.57929 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57929 16.4087 4 11.992 4C7.57528 4 3.99421 7.57929 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20Z" />
          </svg>
        )}
      </Icon>
      <TextEdit
        onKeyDown={onSubmit}
        onBlur={onSubmit}
        defaultValue={props.text}
      />
      <Icon onClick={() => props.onRemoveClick(props.id)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 7V20H17V7H7ZM9 4V5H15V4H9Z" />
        </svg>
      </Icon>
    </TodoContainer>
  );
};

const SortableTodo = SortableElement(
  ({ id, isDone, text, onToggleClick, onRemoveClick, onEditSubmit }) => {
    return (
      <Todo
        id={id}
        key={id}
        text={text}
        isDone={isDone}
        onClick={onToggleClick}
        onRemoveClick={onRemoveClick}
        onSave={onEditSubmit}
      />
    );
  }
);

export default SortableTodo;
