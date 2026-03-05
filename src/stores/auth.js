import { defineStore } from 'pinia';
import api from '@/services/api';
import router from '@/router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    loading: false,
  }),

  actions: {
    async login(credentials) {
      this.loading = true;
      try {
        await api.get('/sanctum/csrf-cookie');
        await api.post('/login', credentials);
        await this.fetchUser();
        router.push('/dashboard');
      } catch (error) {
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async fetchUser() {
      try {
        const response = await api.get('/api/user');
        this.user = response.data;
        this.isAuthenticated = true;
      } catch (error) {
        this.user = null;
        this.isAuthenticated = false;
      }
    },

    async logout() {
      try {
        await api.post('/logout');
        this.user = null;
        this.isAuthenticated = false;
        router.push('/login');
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  },

  persist: true // pinia-plugin-persistedstate ishlatilsa
});