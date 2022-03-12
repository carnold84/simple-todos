import React, { useRef } from 'react';
import _orderBy from 'lodash/orderBy';
import { Container, FormContainer } from './styles';
import SortableList from './SortableList';
import arrayMove from '../../utils/arrayMove';

const List = ({
  addTodo,
  saveAll,
  removeTodo,
  todos,
  toggleTodo,
  updateTodo,
}) => {
  const elInput = useRef(null);

  const onSubmit = (evt) => {
    evt.preventDefault();

    const text = elInput.current.value;
    elInput.current.value = '';

    addTodo(text);
  };

  const onEditSubmit = (id, text) => {
    updateTodo(id, text);
  };

  const onToggleClick = (id, text) => {
    toggleTodo(id, text);
  };

  const onRemoveClick = (id) => {
    removeTodo(id);
  };

  const items = _orderBy(todos, ['isDone', 'order'], ['asc', 'asc']);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let orderedItems = arrayMove(items, oldIndex, newIndex);

    saveAll(orderedItems);
  };

  return (
    <Container>
      <FormContainer onSubmit={onSubmit}>
        <input type="text" placeholder="Add task..." ref={elInput} />
        <button aria-label="Add">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.64295 14.943L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" />
          </svg>
        </button>
      </FormContainer>

      <SortableList
        todos={items}
        onSortEnd={onSortEnd}
        onEditSubmit={onEditSubmit}
        onToggleClick={onToggleClick}
        onRemoveClick={onRemoveClick}
        useDragHandle={true}
      />
    </Container>
  );
};

export default List;
