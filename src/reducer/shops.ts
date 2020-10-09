import { AnyAction } from 'redux';
import { ADD_SHOP } from '../consts';
import { Shop } from '../types';

const initialState: Shop[] = [];

export const shops = (
  state = initialState,
  action: AnyAction
): typeof initialState => {
  switch (action.type) {
    case ADD_SHOP: {
      return [...state, { name: action.name }];
    }
    default: {
      return state;
    }
  }
};
