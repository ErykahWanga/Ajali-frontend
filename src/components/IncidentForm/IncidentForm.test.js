import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import IncidentForm from './IncidentForm';

describe('IncidentForm Component', () => {
  const mockIncident = {
    title: 'Test Incident',
    description: 'Test Description',
    category: 'accident',
    status: 'reported',
    latitude: 0,
    longitude: 0,
  };

  test('renders form with correct initial values', () => {
    const { getByLabelText } = render(
      <IncidentForm incident={mockIncident} onSubmit={() => {}} onCancel={() => {}} />
    );

    expect(getByLabelText('Title').value).toBe(mockIncident.title);
    expect(getByLabelText('Description').value).toBe(mockIncident.description);
    expect(getByLabelText('Category').value).toBe(mockIncident.category);
    expect(getByLabelText('Status').value).toBe(mockIncident.status);
  });

  test('handles input changes', () => {
    const { getByLabelText } = render(
      <IncidentForm onSubmit={() => {}} onCancel={() => {}} />
    );

    fireEvent.change(getByLabelText('Title'), { target: { value: 'New Title' } });
    expect(getByLabelText('Title').value).toBe('New Title');
  });
});