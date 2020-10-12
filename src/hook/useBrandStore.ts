import { useMemo } from 'react';
import { initBrandData } from '../action/brandData';
import { Brand } from '../interfaces';
import { brandStoreGenerator } from '../util/brandStoreGenerator';

export const useBrandStore = (brand: Brand) => {
  return useMemo(() => {
    const store = brandStoreGenerator();
    store.dispatch(initBrandData(brand));
    return store;
  }, [brand]);
};
