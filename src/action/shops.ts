import { AnyAction } from 'redux';
import { ADD_SHOP } from '../consts';
import { Shop } from '../types';

export const addShop = (data: Shop): AnyAction => ({
  type: ADD_SHOP,
  ...data,
});
