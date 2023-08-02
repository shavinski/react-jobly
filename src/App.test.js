import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders App without any errors', () => {
  render(<App />);
});
