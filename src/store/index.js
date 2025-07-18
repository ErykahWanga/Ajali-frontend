import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import incidentReducer from './slices/incidentSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    incidents: incidentReducer,
  },
});
