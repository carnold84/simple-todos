import React from 'react';
import _orderBy from 'lodash/orderBy';
import { ActionButton, Container, Content, Header } from './styles';
import List from '../../components/List';
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm';
import { useStore } from '../../store/StoreProvider';
import arrayMove from '../../utils/arrayMove';
import LightBulbOnIcon from '../../icons/LightBulbOnIcon';
import LightBulbOffIcon from '../../icons/LightBulbOffIcon';

const TodoList = () => {
  const {
    addTodo,
    removeTodo,
    saveAll,
    theme,
    toggleTheme,
    toggleTodo,
    todos,
    updateTodo,
  } = useStore();

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

  const onToggleTheme = () => {
    toggleTheme();
  };

  const items = _orderBy(todos, ['isDone', 'order'], ['asc', 'asc']);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let orderedItems = arrayMove(items, oldIndex, newIndex);

    saveAll(orderedItems);
  };

  return (
    <Container>
      <Content>
        <Header>
          <AddTodoForm onSubmit={onSubmit} style={{ flexGrow: 1 }} />
          <ActionButton onClick={onToggleTheme}>
            {theme === 'dark' ? <LightBulbOnIcon /> : <LightBulbOffIcon />}
          </ActionButton>
        </Header>
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
