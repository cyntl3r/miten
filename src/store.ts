import { createStore, combineReducers } from 'redux';
import { shops } from './reducer/shops';

const reducers = {
  shops,
};

export const store = createStore(combineReducers(reducers));
