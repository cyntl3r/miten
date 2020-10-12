import React, { ChangeEvent, FormEvent, useState } from 'react';
import './BrandLoginFormTab.styles.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { login } from '../../service/auth';
import {
  emailFieldValidate,
  passwordFieldValidate,
} from '../../validation/login';

export const BrandLoginFormTab = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const emailValidation = (value: string) => {
    if (!emailFieldValidate(value)) {
      setEmailError('The given e-mail address is invalid.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const passwordValidation = (value: string) => {
    if (!passwordFieldValidate(value)) {
      setPasswordError('The password must be at least 5 characters long.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    emailValidation(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    passwordValidation(value);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailValid = emailValidation(email);
    const passwordValid = passwordValidation(password);
    if (!emailValid || !passwordValid) {
      return;
    }
    try {
      setLoading(true);
      await login(email, password);
      setSuccess(true);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setEmail('');
    setPassword('');
    setError(false);
    setSuccess(false);
  };

  return (
    <Box p={3}>
      {success ? (
        <>
          <Typography>
            Hello User!{' '}
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={handleLogout}
              size="small"
            >
              Logout
            </Button>
          </Typography>
        </>
      ) : (
        <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
          {error && (
            <Box pb={3}>
              <Typography color="error">
                Account with the given data does not exist!
              </Typography>
            </Box>
          )}
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                type="email"
                error={emailError.length > 0}
                label="E-mail"
                helperText={emailError}
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                fullWidth={true}
              />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                error={passwordError.length > 0}
                label="Password"
                helperText={passwordError}
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                fullWidth={true}
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={
                  loading || emailError.length > 0 || passwordError.length > 0
                }
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Box>
  );
};
