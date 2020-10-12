import React from 'react';
import './BrandOfferTab.styles.css';
import Box from '@material-ui/core/Box';

export interface BrandOfferTabProps {
  name: string;
}

export const BrandOfferTab = ({ name }: BrandOfferTabProps) => (
  <>
    <Box p={3}>
      <h2>{name}</h2>
    </Box>
  </>
);
