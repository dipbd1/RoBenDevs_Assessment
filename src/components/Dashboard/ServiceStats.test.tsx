import React from 'react';
import { render, screen } from '@testing-library/react';
import ServiceStatComponent from './ServiceStats';

const mockData = [
  {
    key: 1,
    service_name: 'Service A',
    cpu_usage: 50,
    memory_usage: 100,
    response_time: 500,
    error_rate: 0.1,
    status: 'OK',
  },
  {
    key: 2,
    service_name: 'Service B',
    cpu_usage: 75,
    memory_usage: 200,
    response_time: 1000,
    error_rate: 0.5,
    status: 'ERROR',
  },
];

test('renders card component', () => {
  render(<ServiceStatComponent data={mockData} />);
  const cardElement = screen.getByRole('article');
  expect(cardElement).toBeInTheDocument();
});

test('renders correct number of cards', () => {
  render(<ServiceStatComponent data={mockData} />);
  const cardElements = screen.getAllByRole('article');
  expect(cardElements.length).toBe(mockData.length);
});

test('renders correct content for each card', () => {
  render(<ServiceStatComponent data={mockData} />);
  const cardElements = screen.getAllByRole('article');
  expect(cardElements[0]).toHaveTextContent('Service A');
  expect(cardElements[0]).toHaveTextContent('CPU Usage50');
  expect(cardElements[0]).toHaveTextContent('Memory Usage100');
  expect(cardElements[0]).toHaveTextContent('Response Time500');
  expect(cardElements[0]).toHaveTextContent('Error Rate0.1');
  expect(cardElements[0]).toHaveTextContent('StatusOK');
  expect(cardElements[1]).toHaveTextContent('Service B');
  expect(cardElements[1]).toHaveTextContent('CPU Usage75');
  expect(cardElements[1]).toHaveTextContent('Memory Usage200');
  expect(cardElements[1]).toHaveTextContent('Response Time1000');
  expect(cardElements[1]).toHaveTextContent('Error Rate0.5');
  expect(cardElements[1]).toHaveTextContent('StatusERROR');
});