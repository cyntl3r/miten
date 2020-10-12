import React from 'react';
import './BrandList.styles.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { BrandCard } from '../BrandCard/BrandCard';
import { Brand } from '../../interfaces';
import { Helmet } from 'react-helmet';

export interface BrandListProps {
  brands: Brand[];
}

export const BrandList = ({ brands }: BrandListProps) => {
  return (
    <>
      <Helmet>
        <title>Miten Brands - List</title>
      </Helmet>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className="brand-list-grid"
      >
        <Container>
          <Grid container direction="column" spacing={2}>
            {brands.map((brand) => (
              <Grid item key={brand.tag}>
                <BrandCard data={brand} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </>
  );
};
