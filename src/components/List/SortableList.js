import { SortableContainer } from 'react-sortable-hoc';
import _orderBy from 'lodash/orderBy';
import SortableTodo from '../Todo';
import { ListContainer, ListMessage } from './styles';

const SortableList = SortableContainer(
  ({ todos, onEditSubmit, onToggleClick, onRemoveClick }) => {
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

export default SortableList;
