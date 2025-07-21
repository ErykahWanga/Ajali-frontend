import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  test('renders logo and navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText('Incident Reporter')).toBeInTheDocument();
    expect(screen.getByText('Map View')).toBeInTheDocument();
    expect(screen.getByText('Report Incident')).toBeInTheDocument();
    expect(screen.getByText('System Health')).toBeInTheDocument();
  });
});