import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText(/App/)).toBeInTheDocument();
  expect(screen.getByText(/Login/)).toBeInTheDocument();
});
