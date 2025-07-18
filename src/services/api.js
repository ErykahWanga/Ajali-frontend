import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const login = (credentials) => api.post('/login', credentials);
export const signup = (userData) => api.post('/signup', userData);
export const createIncident = (incidentData) => api.post('/incidents', incidentData);
export const updateIncident = (id, incidentData) => api.patch(`/incidents/${id}`, incidentData);
export const deleteIncident = (id) => api.delete(`/incidents/${id}`);
export const getIncidents = () => api.get('/incidents');
export const updateIncidentStatus = (id, status) => api.patch(`/incidents/${id}`, { status });

export default api;
