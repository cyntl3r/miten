import React from 'react';
import './App.styles.css';
import { Route, Switch } from 'react-router-dom';
import { BrandList } from '../BrandList/BrandList';
import { NotFound } from '../NotFound/NotFound';
import brands from '../../brands.json';
import { BrandsContainer } from '../BrandsContainer/BrandsContainer';

export const App = () => (
  <Switch>
    <Route path="/" exact>
      <BrandList brands={brands} />
    </Route>
    <Route path="/brand/:tag">
      <BrandsContainer brands={brands} />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);
