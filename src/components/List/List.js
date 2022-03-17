import React from 'react';
import _orderBy from 'lodash/orderBy';
import SortableList from './SortableList';

const List = ({
  onEditSubmit,
  onRemoveClick,
  onToggleClick,
  onSortEnd,
  todos,
}) => {
  return (
    <SortableList
      onEditSubmit={onEditSubmit}
      onRemoveClick={onRemoveClick}
      onSortEnd={onSortEnd}
      onToggleClick={onToggleClick}
      todos={todos}
      useDragHandle={true}
    />
  );
};

export default List;
