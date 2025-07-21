import React from 'react';
import { render } from '@testing-library/react';
import Map from './Map';

describe('Map Component', () => {
  const mockIncidents = [
    {
      id: 1,
      title: 'Test Incident',
      description: 'Test Description',
      latitude: 0,
      longitude: 0,
      status: 'reported',
    },
  ];

  test('renders without crashing', () => {
    render(
      <Map
        incidents={mockIncidents}
        onMarkerClick={() => {}}
        selectedIncident={null}
        onMapClick={() => {}}
      />
    );
  });
});