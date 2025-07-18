import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getIncidents, updateIncidentStatus } from '../../services/api';

export const fetchIncidents = createAsyncThunk('incidents/fetchAll', async () => {
  const response = await getIncidents();
  return response.data;
});

export const updateIncidentStatus = createAsyncThunk('incidents/updateStatus', async ({ id, status }) => {
  const response = await updateIncidentStatus(id, status);
  return response.data;
});

const incidentSlice = createSlice({
  name: 'incidents',
  initialState: {
    incidents: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncidents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIncidents.fulfilled, (state, action) => {
        state.loading = false;
        state.incidents = action.payload;
      })
      .addCase(fetchIncidents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateIncidentStatus.fulfilled, (state, action) => {
        const index = state.incidents.findIndex((i) => i.id === action.payload.id);
        if (index !== -1) {
          state.incidents[index] = action.payload;
        }
      });
  },
});

export default incidentSlice.reducer;
