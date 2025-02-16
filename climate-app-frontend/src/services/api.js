import axios from 'axios';

const API_URL = 'http://localhost:5001';

// Create axios instance with default config
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

export const fetchMetrics = async () => {
    try {
        const response = await api.get('/api/sustainability-metrics');
        return response.data;
    } catch (error) {
        console.error('Error fetching metrics:', error);
        throw error;
    }
};

export const login = async (credentials) => {
    try {
        const response = await api.post('/api/login', credentials);
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const register = async (userData) => {
    try {
        const response = await api.post('/api/register', userData);
        return response.data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};

export const fetchModules = async () => {
    try {
        const response = await api.get('/api/modules');
        return response.data;
    } catch (error) {
        console.error('Error fetching modules:', error);
        throw error;
    }
};

export default api; 