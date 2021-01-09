import React from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';
import App from './components/App';
import './index.css';
import { ItemsProvider } from './utils';

ReactDOM.render(
  // Context wrapped around App
  <ItemsProvider>
    <App />
  </ItemsProvider>,
  document.getElementById('root')
);
