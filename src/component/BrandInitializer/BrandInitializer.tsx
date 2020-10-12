import React from 'react';
import './BrandInitializer.styles.css';
import { useBrandStore } from '../../hook/useBrandStore';
import { Brand } from '../../interfaces';
import { Provider } from 'react-redux';
import { BrandLayout } from '../BrandLayout/BrandLayout';

export interface BrandInitializerProps {
  data: Brand;
  leftMove: string;
  nextBrandTag?: string;
  prevBrandTag?: string;
}

export const BrandInitializer = ({
  data,
  leftMove,
  nextBrandTag,
  prevBrandTag,
}: BrandInitializerProps) => {
  const store = useBrandStore(data);
  return (
    <Provider store={store}>
      <BrandLayout
        leftMove={leftMove}
        nextBrandTag={nextBrandTag}
        prevBrandTag={prevBrandTag}
      />
    </Provider>
  );
};
