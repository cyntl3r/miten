import { createStore, combineReducers } from 'redux';
import { brandData } from '../reducer/brandData';

const reducers = combineReducers({
  brandData,
});

export type BrandStoreState = ReturnType<typeof reducers>;

export const brandStoreGenerator = () => createStore(reducers);
