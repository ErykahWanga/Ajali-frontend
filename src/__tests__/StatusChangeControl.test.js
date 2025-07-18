import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import StatusChangeControl from '../components/admin/StatusChangeControl';
import { updateIncidentStatus } from '../store/slices/incidentSlice';

const mockStore = configureStore([]);

describe('StatusChangeControl', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { user: { role: 'admin' } },
    });
    store.dispatch = jest.fn();
  });

  test('renders status options', () => {
    const incident = { id: 1, status: 'Open' };
    render(
      <Provider store={store}>
        <StatusChangeControl incident={incident} />
      </Provider>
    );

    expect(screen.getByText('Open')).toBeInTheDocument();
    expect(screen.getByText('Under Investigation')).toBeInTheDocument();
    expect(screen.getByText('Resolved')).toBeInTheDocument();
  });

  test('dispatches updateIncidentStatus on change', () => {
    const incident = { id: 1, status: 'Open' };
    render(
      <Provider store={store}>
        <StatusChangeControl incident={incident} />
      </Provider>
    );

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Resolved' } });

    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: updateIncidentStatus.pending.type,
        meta: expect.objectContaining({
          arg: { id: 1, status: 'Resolved' },
        }),
      })
    );
  });
});
