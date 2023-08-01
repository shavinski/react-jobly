import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import axiosMock from 'axios';
import App from './App';
import JoblyApi from './joblyApi';

afterEach(cleanup);

test('renders App without any errors', () => {
  render(<App />);
});

test('Login correctly returns and sets JWT token', async () => {
  axiosMock.get(mockResolvedValueOnce(
    {
      data:
        { greeting: 'hello there' }
    }))

  const { getByTestId } = render(<App />);

  expect(getByTestId('loading')).toHaveTextContent('Loading...')
})