import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MapView from '../components/admin/MapView';

jest.mock('@react-google-maps/api', () => ({
  GoogleMap: ({ children }) => <div>{children}</div>,
  Marker: ({ children }) => <div>{children}</div>,
  InfoWindow: ({ children }) => <div>{children}</div>,
  LoadScript: ({ children }) => <div>{children}</div>,
}));

describe('MapView', () => {
  const incidents = [
    {
      id: 1,
      title: 'Test Incident',
      status: 'Open',
      category: 'Accident',
      latitude: 40.7128,
      longitude: -74.0060,
    },
  ];

  test('renders map with markers', () => {
    render(
      <BrowserRouter>
        <MapView incidents={incidents} />
      </BrowserRouter>
    );

    expect(screen.getByText('Test Incident')).toBeInTheDocument();
    expect(screen.getByText('Status: Open')).toBeInTheDocument();
    expect(screen.getByText('Category: Accident')).toBeInTheDocument();
    expect(screen.getByText('View Details')).toBeInTheDocument();
  });
});
