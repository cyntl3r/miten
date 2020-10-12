import React, { useEffect, useState } from 'react';
import './BrandsContainer.styles.css';
import { Brand } from '../../interfaces';
import { BrandInitializer } from '../BrandInitializer/BrandInitializer';
import { useParams } from 'react-router-dom';
import { getBrandIndexByTag } from '../../util/getBrandIndexByTag';
import { Helmet } from 'react-helmet';

export interface BrandsContainerProps {
  brands: Brand[];
}

export const BrandsContainer = ({ brands }: BrandsContainerProps) => {
  const { tag } = useParams<{ tag: string }>();
  const [currentBrandIndex, setCurrentBrandIndex] = useState(
    getBrandIndexByTag(brands, tag)
  );

  useEffect(() => {
    brands.forEach(
      (brand, index) => brand.tag === tag && setCurrentBrandIndex(index)
    );
  }, [tag, brands]);

  return (
    <>
      <Helmet>
        <title>Miten Brands - {brands[currentBrandIndex].name}</title>
      </Helmet>
      {brands.map((brand, i) => (
        <BrandInitializer
          key={brand.tag}
          data={brand}
          nextBrandTag={brands[i + 1]?.tag}
          prevBrandTag={brands[i - 1]?.tag}
          leftMove={`${(i - currentBrandIndex) * 100}vw`}
        />
      ))}
    </>
  );
};
