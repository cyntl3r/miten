import { Brand } from '../interfaces';
import { INIT_BRAND_DATA } from '../actionTypes';

export interface InitBrandDataAction {
  type: typeof INIT_BRAND_DATA;
  payload: Brand;
}

export type BrandDataActionTypes = InitBrandDataAction;

export const initBrandData = (payload: Brand): InitBrandDataAction => ({
  type: INIT_BRAND_DATA,
  payload,
});
