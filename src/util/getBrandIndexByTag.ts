import { Brand } from '../interfaces';

export const getBrandIndexByTag = (brands: Brand[], tag: string) => {
  let index = -1;
  brands.forEach((brand, i) => {
    if (brand.tag === tag) {
      index = i;
    }
  });
  return index;
};
