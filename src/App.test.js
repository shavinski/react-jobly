import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders App without any errors', () => {
  render(<App />);
});