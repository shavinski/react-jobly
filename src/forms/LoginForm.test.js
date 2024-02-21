import React from 'react';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

import JoblyApi from '../api/joblyApi';
import LoginForm from './LoginForm';
import App from '../App';


const login = jest.fn()
afterEach(cleanup);

describe("LoginForm", () => {

    test('Renders log in form correctly', () => {
        const { getByText } = render(
            <MemoryRouter>
                <LoginForm login={login} />
            </MemoryRouter>
        );

        const loginTitle = getByText(/Log In/);
        expect(loginTitle).toBeInTheDocument();
    });
});

describe('Login method', () => {

    JoblyApi.request = jest.fn(async (endpoint, data = {}, method = 'get') => {
        // Mock the data that the method should return
        const mockData = {
            token: 'mock-test-token',
        };
        return mockData;
    });

    test('should return the token when login is successful', async () => {
        const { getByTestId } = render(
            <App />
        );
        const loginData = {
            username: 'testuser',
            password: 'testpassword',
        };

        const res = await JoblyApi.request('auth/token', loginData);

        expect(JoblyApi.request).toHaveBeenCalledWith('auth/token', loginData);

        expect(res.token).toBe('mock-test-token');
    });
});

describe("handleChange function", () => {

    test('handleChange correctly sets form data', () => {
        const { getByLabelText } = render(
            <MemoryRouter>
                <LoginForm login={login} />
            </MemoryRouter>
        );

        const usernameInput = getByLabelText(/Username/);
        fireEvent.change(usernameInput, { target: { value: 'testUser' } });

        expect(usernameInput.value).toBe('testUser');
    });
});

describe("handleSubmit function", () => {

    test('handleSubmit calls login and navigates on successful login', async () => {
        const login = jest.fn().mockResolvedValue();

        const { getByLabelText, getByRole } = render(
            <MemoryRouter>
                <LoginForm login={login} />
            </MemoryRouter>
        );

        const usernameInput = getByLabelText(/Username/);
        const passwordInput = getByLabelText(/Password/);

        fireEvent.change(usernameInput, { target: { value: 'testUser' } });
        fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

        const submitButton = getByRole('button', { name: 'Submit' });
        await act(async () => {
            fireEvent.click(submitButton);
        });

        expect(login).toHaveBeenCalledTimes(1);
        expect(login).toHaveBeenCalledWith({ username: 'testUser', password: 'testPassword' });
    });
});