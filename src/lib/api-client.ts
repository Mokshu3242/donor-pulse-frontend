// frontend\src\lib\api-client.ts
import axios from 'axios';

// Use environment variable with fallback
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://donorpulse-api.onrender.com/api/v1';

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - add auth token
apiClient.interceptors.request.use(
  (config) => {
    // Only run in browser
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token') || localStorage.getItem('admin_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handle 401
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== 'undefined' && error.response?.status === 401) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('admin_token');
      localStorage.removeItem('hospital');
      localStorage.removeItem('admin');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default apiClient;