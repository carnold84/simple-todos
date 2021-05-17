import React from "react";
import classNames from "classnames";
import { SortableElement, SortableHandle } from "react-sortable-hoc";
import checkboxIcon from "../../images/check_box.svg";
import checkboxCheckedIcon from "../../images/check_box_checked.svg";
import deleteIcon from "../../images/delete.svg";
import reorder from "../../images/reorder.svg";
import {
  TodoContainer,
  Reorder,
  Checkbox,
  TextEdit,
  RemoveButton,
} from "./styles";

const Todo = (props) => {
  let classes = classNames({ "is-done": props.isDone });
  let checkbox = props.isDone ? checkboxCheckedIcon : checkboxIcon;

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
      <Reorder>
        <img src={reorder} role="presentation" />
      </Reorder>
    );
  });

  return (
    <TodoContainer className={classes}>
      <DragHandle />
      <Checkbox onClick={() => props.onClick(props.id)}>
        <img src={checkbox} role="presentation" />
      </Checkbox>
      <TextEdit
        onKeyDown={onSubmit}
        onBlur={onSubmit}
        defaultValue={props.text}
      />
      <RemoveButton onClick={() => props.onRemoveClick(props.id)}>
        <img src={deleteIcon} role="presentation" />
      </RemoveButton>
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
