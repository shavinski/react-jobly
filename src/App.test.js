import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import App from './App';

import JoblyApi from './api/joblyApi';

afterEach(cleanup);

test('renders App without any errors', () => {
  const { getByRole } = render(
    <App />
  );

  const logInButton = getByRole('button', { name: 'Log In' });
  const signUpButton = getByRole('button', { name: 'Sign Up' });
  expect(logInButton).toBeInTheDocument();
  expect(signUpButton).toBeInTheDocument();
});

// describe('login', () => {

//   it('should call JoblyApi.login with the correct form data', async () => {
//     const formData = { username: 'testuser', password: 'testpassword' };

//     await login(formData);

//     expect(JoblyApi.login).toHaveBeenCalledWith(formData);
//   });

  // it('should call setToken with the correct token value', async () => {
  //   const formData = { username: 'testuser', password: 'testpassword' };
  //   const setToken = jest.fn();

  //   await login(formData, setToken);

  //   expect(setToken).toHaveBeenCalledWith('fakeToken');
  // });

// });
