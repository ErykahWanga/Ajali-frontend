import { configureStore } from '@reduxjs/toolkit';
import incidentReducer from './slices/incidentSlice';

export default configureStore({
  reducer: {
    incidents: incidentReducer,
  },
});