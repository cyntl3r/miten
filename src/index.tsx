import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import './server';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './component/App/App';
import { store } from './store';
import { addShop } from './action/shops';

store.dispatch(addShop({ name: 'Shop A' }));
store.dispatch(addShop({ name: 'Shop B' }));

render(
  <StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
