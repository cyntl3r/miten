import { BrandDataActionTypes } from '../action/brandData';
import { Brand } from '../interfaces';
import { INIT_BRAND_DATA } from '../actionTypes';

export type BrandDataState = Brand;

const initialState: BrandDataState = {
  tag: '',
  name: '',
};

export const brandData = (
  state = initialState,
  action: BrandDataActionTypes
): BrandDataState => {
  switch (action.type) {
    case INIT_BRAND_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
