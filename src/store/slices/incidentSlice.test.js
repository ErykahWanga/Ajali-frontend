import incidentReducer, {
  fetchIncidents,
  createIncident,
  updateIncident,
  deleteIncident,
} from './incidentSlice';

describe('incidentSlice', () => {
  const initialState = {
    incidents: [],
    currentIncident: {},
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(incidentReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('fetchIncidents', () => {
    it('should handle pending', () => {
      const action = { type: fetchIncidents.pending.type };
      const state = incidentReducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        loading: true,
        error: null,
      });
    });

    it('should handle fulfilled', () => {
      const mockIncidents = [{ id: 1, title: 'Test Incident' }];
      const action = { type: fetchIncidents.fulfilled.type, payload: mockIncidents };
      const state = incidentReducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        incidents: mockIncidents,
        loading: false,
      });
    });

    it('should handle rejected', () => {
      const error = 'Failed to fetch incidents';
      const action = { type: fetchIncidents.rejected.type, payload: { message: error } };
      const state = incidentReducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        loading: false,
        error,
      });
    });
  });
});