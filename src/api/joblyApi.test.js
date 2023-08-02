import React from 'react';
import { render, fireEvent, screen, waitFor, findByText } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import JoblyApi from './joblyApi';
import App from '../App';
import LoginForm from '../forms/LoginForm';

jest.mock('./joblyApi');
const login = jest.fn();


describe('JoblyAPI login', () => {
    test("Should display correct homepage", async () => {
        const { findByText } = render(<App />)
        expect(await findByText('Log In')).toBeInTheDocument();
    })

    test('Should login a user correctly', async () => {
        const setup = () => {
            const utils = render(
                <MemoryRouter>
                    <LoginForm login={login} />
                </MemoryRouter>
            );
            const usernameInput = screen.getByLabelText('Username');
            const passwordInput = screen.getByLabelText('Password');
            return {
                usernameInput,
                passwordInput,
                ...utils,
            }
        }

        const { usernameInput, passwordInput } = setup()

        fireEvent.change(usernameInput, { target: { value: 'test123' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });

        fireEvent.click(screen.getByText('Submit'));

        // Wait for the login response and check if the login function was called correctly
        await waitFor(() => {
            expect(login).toHaveBeenCalledTimes(1);
        });
    });

})
