import React from 'react';
import './NotFound.styles.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export const NotFound = () => (
  <Grid
    container
    direction="column"
    alignItems="center"
    justify="center"
    className="not-found-grid"
  >
    <Container className="not-found-text">
      <Typography gutterBottom variant="h5" component="h2">
        404
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Sorry, but the page you are looking for is not found.
      </Typography>
    </Container>
  </Grid>
);
