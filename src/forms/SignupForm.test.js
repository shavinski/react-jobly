import React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import SignupForm from './SignupForm'

afterEach(cleanup);
const signup = jest.fn()

describe("SignupForm", () => {

    test('Renders sign up form correctly', () => {
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
        const { getByLabelText } = render(
            <MemoryRouter>
                <SignupForm signup={signup} />
            </MemoryRouter>
        );

        const usernameInput = getByLabelText(/Username/);
        const passwordInput = getByLabelText(/Password/);
        const firstNameInput = getByLabelText(/First name/);
        const lastNameInput = getByLabelText(/Last name/);
        const emailInput = getByLabelText(/Email/);

        fireEvent.change(usernameInput, { target: { value: 'usernametest' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.change(firstNameInput, { target: { value: 'testfn' } });
        fireEvent.change(lastNameInput, { target: { value: 'testln' } });
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
        const signup = jest.fn()

        const { getByLabelText, getByRole } = render(
            <MemoryRouter>
                <SignupForm signup={signup} />
            </MemoryRouter>
        );

        const usernameInput = getByLabelText(/Username/);
        const passwordInput = getByLabelText(/Password/);
        const firstNameInput = getByLabelText(/First name/);
        const lastNameInput = getByLabelText(/Last name/);
        const emailInput = getByLabelText(/Email/);

        fireEvent.change(usernameInput, { target: { value: 'usernametest' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.change(firstNameInput, { target: { value: 'testfn' } });
        fireEvent.change(lastNameInput, { target: { value: 'testln' } });
        fireEvent.change(emailInput, { target: { value: 'test@email.com' } });

        // Submit the form
        const submitButton = getByRole('button', { name: 'Submit' });
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
});