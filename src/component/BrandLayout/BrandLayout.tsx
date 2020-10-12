import React, { useState } from 'react';
import './BrandLayout.styles.css';
import { useSelector } from 'react-redux';
import { BrandStoreState } from '../../util/brandStoreGenerator';
import { BrandOfferTab } from '../BrandOfferTab/BrandOfferTab';
import { BrandLoginFormTab } from '../BrandLoginFormTab/BrandLoginFormTab';
import { BrandDataState } from '../../reducer/brandData';
import { NavigateBtn } from '../NavigateBtn/NavigateBtn';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TableChartIcon from '@material-ui/icons/TableChart';
import FaceIcon from '@material-ui/icons/Face';

export interface BrandLayoutProps {
  leftMove: string;
  nextBrandTag?: string;
  prevBrandTag?: string;
}

export const BrandLayout = ({
  leftMove,
  nextBrandTag,
  prevBrandTag,
}: BrandLayoutProps) => {
  const { name } = useSelector<BrandStoreState, BrandDataState>(
    (state) => state.brandData
  );
  const [tab, setTab] = useState(0);

  const handleChange = (index: number) => {
    setTab(index);
  };

  return (
    <Box className="brand-layout-grid" style={{ left: leftMove }}>
      {nextBrandTag && <NavigateBtn next={nextBrandTag} />}
      {prevBrandTag && <NavigateBtn prev={prevBrandTag} />}
      <Container>
        <Paper square>
          <Tabs
            value={tab}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            onChange={(_event, index) => handleChange(index)}
          >
            <Tab icon={<TableChartIcon />} label="Offer" />
            <Tab icon={<FaceIcon />} label="Sign in" />
          </Tabs>
        </Paper>
        <Box mt={2}>
          <Paper square>
            {tab === 0 && <BrandOfferTab name={name} />}
            {tab === 1 && <BrandLoginFormTab />}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};
