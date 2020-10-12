import React from 'react';
import './NavigateBtn.styles.css';
import { Link } from 'react-router-dom';
import { pathToBrand } from '../../util/pathToBrand';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigatePrevIcon from '@material-ui/icons/NavigateBefore';
import Button from '@material-ui/core/Button';

export interface NavigateBtnProps {
  next?: string;
  prev?: string;
}

export const NavigateBtn = ({ next, prev }: NavigateBtnProps) =>
  next ? (
    <Link to={pathToBrand(next)}>
      <Button
        variant="contained"
        className="navigate-btn-next"
        endIcon={<NavigateNextIcon />}
        color="secondary"
      >
        Next
      </Button>
    </Link>
  ) : prev ? (
    <Link to={pathToBrand(prev)}>
      <Button
        variant="contained"
        className="navigate-btn-prev"
        startIcon={<NavigatePrevIcon />}
        color="secondary"
      >
        Prev
      </Button>
    </Link>
  ) : null;
