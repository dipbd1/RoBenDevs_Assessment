import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders dashboard title', () => {
  render(<Dashboard />);
  const titleElement = screen.getByText(/Dashboard for OmniKick/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders geo stats component', () => {
  render(<Dashboard />);
  const geoStatsElement = screen.getByTestId('geo-stats');
  expect(geoStatsElement).toBeInTheDocument();
});

test('renders service stats component', () => {
  render(<Dashboard />);
  const serviceStatsElement = screen.getByTestId('service-stats');
  expect(serviceStatsElement).toBeInTheDocument();
});

test('renders recent events component', () => {
  render(<Dashboard />);
  const recentEventsElement = screen.getByTestId('recent-events');
  expect(recentEventsElement).toBeInTheDocument();
});