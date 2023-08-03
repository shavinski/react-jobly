import React from 'react';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import SignupForm from './SignupForm'

afterEach(cleanup);
const signup = jest.fn()

describe("SignupForm", () => {

    test('Renders log in form correctly', () => {
        const { getByText } = render(
            <MemoryRouter>
                <SignupForm login={signup} />
            </MemoryRouter>
        );

        const signupTitle = getByText(/Sign Up/);
        expect(signupTitle).toBeInTheDocument();
    });
});

describe("handleChange function", () => {

    test('handleChange correctly sets form data', () => {
        render(
            <MemoryRouter>
                <SignupForm signup={signup} />
            </MemoryRouter>
        );
        // Simulate a change event for the username input
        const usernameInput = screen.getByLabelText(/Username/);
        fireEvent.change(usernameInput, { target: { value: 'usernametest' } });
        // Simulate a change event for the first name input
        const passwordInput = screen.getByLabelText(/Password/);
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        // Simulate a change event for the first name input
        const firstNameInput = screen.getByLabelText(/First name/);
        fireEvent.change(firstNameInput, { target: { value: 'testfn' } });
        // Simulate a change event for the last name input
        const lastNameInput = screen.getByLabelText(/Last name/);
        fireEvent.change(lastNameInput, { target: { value: 'testln' } });
        // Simulate a change event for the email input
        const emailInput = screen.getByLabelText(/Email/);
        fireEvent.change(emailInput, { target: { value: 'test@email.com' } });

        expect(usernameInput.value).toBe('usernametest');
        expect(passwordInput.value).toBe('password');
        expect(firstNameInput.value).toBe('testfn');
        expect(lastNameInput.value).toBe('testln');
        expect(emailInput.value).toBe('test@email.com');
    });
})

describe("handleSubmit function", () => {
    test('handleSubmit calls signup and navigates on successful signup', async () => {
        // Create mock signup function and navigate function
        const signup = jest.fn().mockResolvedValue();

        // Render the component with the mock functions
        render(
            <MemoryRouter>
                <SignupForm signup={signup} />
            </MemoryRouter>
        );

        // Simulate a change event for the username input
        const usernameInput = screen.getByLabelText(/Username/);
        fireEvent.change(usernameInput, { target: { value: 'usernametest' } });
        // Simulate a change event for the password input
        const passwordInput = screen.getByLabelText(/Password/);
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        // Simulate a change event for the first name input
        const firstNameInput = screen.getByLabelText(/First name/);
        fireEvent.change(firstNameInput, { target: { value: 'testfn' } });
        // Simulate a change event for the last name input
        const lastNameInput = screen.getByLabelText(/Last name/);
        fireEvent.change(lastNameInput, { target: { value: 'testln' } });
        // Simulate a change event for the email input
        const emailInput = screen.getByLabelText(/Email/);
        fireEvent.change(emailInput, { target: { value: 'test@email.com' } });

        // Submit the form
        const submitButton = screen.getByRole('button', { name: 'Submit' });
        await act(async () => {
            fireEvent.click(submitButton);
        });

        expect(signup).toHaveBeenCalledTimes(1);
        expect(signup).toHaveBeenCalledWith({
            username: 'usernametest',
            password: 'password',
            firstName: 'testfn',
            lastName: 'testln',
            email: 'test@email.com'
        });
    });

    // test('handleSubmit sets flash message on signup error', async () => {
    //     // Create mock signup function that throws an error for failed signup
    //     const signup = jest.fn().mockRejectedValue(new Error('Invalid username/password'));
    //     const navigate = jest.fn();

    //     // Render the component with the mock functions
    //     render(
    //         <MemoryRouter>
    //             <SignupForm signup={signup} />
    //         </MemoryRouter>
    //     );

    //     // Submit the form
    //     const submitButton = screen.getByRole('button', { name: /Submit/ });
    //     fireEvent.click(submitButton);

    //     // Check if signup function is called with the correct form data
    //     expect(signup).toHaveBeenCalledTimes(1);

    //     // Check if flash message is set after failed signup
    //     await waitFor(() => {
    //         const errorMessage = screen.findByText('Invalid username/password');
    //         expect(errorMessage).toBeInTheDocument();
    //     })

    //     // Check if navigate function is not called after failed signup
    //     expect(navigate).not.toHaveBeenCalled();
    // });
})