import { render, screen } from '@testing-library/react';
import IncidentDetailsCard from '../components/admin/IncidentDetailsCard';

describe('IncidentDetailsCard', () => {
  const incident = {
    id: 1,
    title: 'Test Incident',
    description: 'This is a test incident',
    category: 'Accident',
    status: 'Open',
    latitude: 40.7128,
    longitude: -74.0060,
    createdAt: '2025-07-18T09:00:00Z',
    media: 'http://example.com/image.jpg',
  };

  test('renders incident details', () => {
    render(<IncidentDetailsCard incident={incident} />);

    expect(screen.getByText('Test Incident')).toBeInTheDocument();
    expect(screen.getByText('This is a test incident')).toBeInTheDocument();
    expect(screen.getByText('Category: Accident')).toBeInTheDocument();
    expect(screen.getByText('Status: Open')).toBeInTheDocument();
    expect(screen.getByText('(40.7128, -74.006)')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'http://example.com/image.jpg');
  });
});
