import React from 'react';
import { render, screen } from '@testing-library/react';
import RecentEventsComponent from './RecentEvents';

const mockEvents = [
  { service_name: 'Service A', error_message: 'Error 1', timestamp: '2022-01-01T00:00:00Z' },
  { service_name: 'Service B', error_message: 'Error 2', timestamp: '2022-01-02T00:00:00Z' },
];

test('renders timeline component', () => {
  render(<RecentEventsComponent events={mockEvents} />);
  const timelineElement = screen.getByRole('list');
  expect(timelineElement).toBeInTheDocument();
});

test('renders correct number of timeline items', () => {
  render(<RecentEventsComponent events={mockEvents} />);
  const timelineItemElements = screen.getAllByRole('listitem');
  expect(timelineItemElements.length).toBe(mockEvents.length);
});

test('renders correct content for each timeline item', () => {
  render(<RecentEventsComponent events={mockEvents} />);
  const timelineItemElements = screen.getAllByRole('listitem');
  expect(timelineItemElements[0]).toHaveTextContent('Service A - Error 1');
  expect(timelineItemElements[0]).toHaveTextContent('2022-01-01T00:00:00Z');
  expect(timelineItemElements[1]).toHaveTextContent('Service B - Error 2');
  expect(timelineItemElements[1]).toHaveTextContent('2022-01-02T00:00:00Z');
});