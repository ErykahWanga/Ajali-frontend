
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./reportsAPI";

export const fetchReports = createAsyncThunk("reports/fetchReports", API.fetchReports);

const reportsSlice = createSlice({
  name: "reports",
  initialState: { reports: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReports.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReports.fulfilled, (state, action) => {
        state.reports = action.payload;
        state.loading = false;
      })
      .addCase(fetchReports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default reportsSlice.reducer;