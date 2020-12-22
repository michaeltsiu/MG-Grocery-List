import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styling/index.css';
import { ItemsProvider } from './utils/Context';

ReactDOM.render(
  <ItemsProvider>
    <App />
  </ItemsProvider>,
  document.getElementById('root')
);
