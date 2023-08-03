import React from 'react';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from './LoginForm';

afterEach(cleanup);
const login = jest.fn()

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

describe("handleChange function", () => {

    test('handleChange correctly sets form data', () => {
        render(
            <MemoryRouter>
                <LoginForm login={login} />
            </MemoryRouter>
        );
        // Simulate a change event for the username input
        const usernameInput = screen.getByLabelText(/Username/);
        fireEvent.change(usernameInput, { target: { value: 'testUser' } });

        expect(usernameInput.value).toBe('testUser');
    });
})

describe("handleSubmit function", () => {
    test('handleSubmit calls login and navigates on successful login', async () => {
        // Create mock login function and navigate function
        const login = jest.fn().mockResolvedValue();

        // Render the component with the mock functions
        render(
            <MemoryRouter>
                <LoginForm login={login} />
            </MemoryRouter>
        );

        // Fill in the form fields
        const usernameInput = screen.getByLabelText(/Username/);
        const passwordInput = screen.getByLabelText(/Password/);
        fireEvent.change(usernameInput, { target: { value: 'testUser' } });
        fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

        // Submit the form
        const submitButton = screen.getByRole('button', { name: 'Submit' });
        await act(async () => {
            fireEvent.click(submitButton);
        });

        expect(login).toHaveBeenCalledTimes(1);
        expect(login).toHaveBeenCalledWith({ username: 'testUser', password: 'testPassword' });
    });

    // test('handleSubmit sets flash message on login error', async () => {
    //     // Create mock login function that throws an error for failed login
    //     const login = jest.fn().mockRejectedValue(new Error('Invalid username/password'));
    //     const navigate = jest.fn();

    //     // Render the component with the mock functions
    //     render(
    //         <MemoryRouter>
    //             <LoginForm login={login} />
    //         </MemoryRouter>
    //     );

    //     // Submit the form
    //     const submitButton = screen.getByRole('button', { name: /Submit/ });
    //     fireEvent.click(submitButton);

    //     // Check if login function is called with the correct form data
    //     expect(login).toHaveBeenCalledTimes(1);

    //     // Check if flash message is set after failed login
    //     await waitFor(() => {
    //         const errorMessage = screen.findByText('Invalid username/password');
    //         expect(errorMessage).toBeInTheDocument();
    //     })

    //     // Check if navigate function is not called after failed login
    //     expect(navigate).not.toHaveBeenCalled();
    // });
})