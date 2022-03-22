import React from 'react';
import _orderBy from 'lodash/orderBy';
import { Container, Content } from './styles';
import List from '../../components/List';
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm';
import { useStore } from '../../store/StoreProvider';
import arrayMove from '../../utils/arrayMove';

const TodoList = () => {
  const { addTodo, removeTodo, saveAll, toggleTodo, todos, updateTodo } =
    useStore();

  const onSubmit = (text) => {
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
      <Content>
        <AddTodoForm onSubmit={onSubmit} />
        <List
          onEditSubmit={onEditSubmit}
          onRemoveClick={onRemoveClick}
          onSortEnd={onSortEnd}
          onToggleClick={onToggleClick}
          todos={items}
        />
      </Content>
    </Container>
  );
};

export default TodoList;
