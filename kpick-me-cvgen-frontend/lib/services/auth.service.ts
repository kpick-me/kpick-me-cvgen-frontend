import { api } from '../api';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export const authService = {
  async getCurrentUser(): Promise<User> {
    const { data } = await api.get('/auth/me');
    return data;
  },

  initiateGoogleAuth() {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  },

  setToken(token: string) {
    localStorage.setItem('auth_token', token);
  },

  getToken() {
    return localStorage.getItem('auth_token');
  },

  logout() {
    localStorage.removeItem('auth_token');
    window.location.href = '/';
  },

  isAuthenticated() {
    return !!this.getToken();
  },
};