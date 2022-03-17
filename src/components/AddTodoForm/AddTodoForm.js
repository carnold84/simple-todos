import React, { useRef } from 'react';
import _orderBy from 'lodash/orderBy';
import { Container } from './styles';

const AddTodoForm = ({ onSubmit: onFormSubmit }) => {
  const elInput = useRef(null);

  const onSubmit = (evt) => {
    evt.preventDefault();

    const text = elInput.current.value;
    elInput.current.value = '';

    onFormSubmit(text);
  };

  return (
    <Container onSubmit={onSubmit}>
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
    </Container>
  );
};

export default AddTodoForm;
