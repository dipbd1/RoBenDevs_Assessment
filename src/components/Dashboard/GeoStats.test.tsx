import React from 'react';
import { render, screen } from '@testing-library/react';
import GeoStatsComponent from './GeoStats';

type mapBlipsProps = { coordinate: [number, number]; status: string }[];

const mockData: mapBlipsProps = [
  { coordinate: [0, 0], status: 'OK' },
  { coordinate: [10, 10], status: 'ERROR' },
];

test('renders map component', () => {
  render(<GeoStatsComponent data={mockData} />);
  const mapElement = screen.getByRole('img');
  expect(mapElement).toBeInTheDocument();
});

test('renders markers for each blip', () => {
  render(<GeoStatsComponent data={mockData} />);
  const markerElements = screen.getAllByRole('img', { name: /marker/i });
  expect(markerElements.length).toBe(mockData.length);
});

test('renders correct color for each blip', () => {
  render(<GeoStatsComponent data={mockData} />);
  const markerElements = screen.getAllByRole('img', { name: /marker/i });
  expect(markerElements[0]).toHaveAttribute('fill', '#00FF00');
  expect(markerElements[1]).toHaveAttribute('fill', '#FF0000');
});