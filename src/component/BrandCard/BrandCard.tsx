import React, { FunctionComponent } from 'react';
import './BrandCard.styles.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Brand } from '../../interfaces';
import { Link } from 'react-router-dom';
import { pathToBrand } from '../../util/pathToBrand';

export interface BrandCardProps {
  data: Brand;
}

export const BrandCard: FunctionComponent<BrandCardProps> = ({
  data: { tag, name },
}) => (
  <Card className="brand-card-card">
    <CardActionArea component={Link} to={pathToBrand(tag)}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
