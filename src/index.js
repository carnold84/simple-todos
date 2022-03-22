import React from 'react';
import { render } from 'react-dom';
import App from './App';
import StoreProvider from './store/StoreProvider';

render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('app')
);
