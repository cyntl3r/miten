import axios from 'axios';

export const login = async (email: string, password: string) =>
  axios.post('/api/auth', { email, password });
