import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen, waitFor, findByText, cleanup, act, waitForElementToBeRemoved } from '@testing-library/react';
import JoblyApi from './joblyApi';
import App from '../App'
import { server } from '../mocks/server'




// jest.mock("react-router-dom", () => ({
//     ...jest.requireActual("react-router-dom"),
//     useNavigate: () => jest.fn(),
// }));

// const BASE_URL = 'http://localhost:3001'
const mockUserContext = {
    currentUser: {
        username: "test-user",
        firstName: "testfn",
        lastName: "testln",
        email: "test@gmail.com",
        isAdmin: false,
        applications: [2],
    },
};

describe('Logout method', () => {
    test('Sets token to be empty string with token set to valid token', () => {
        JoblyApi.token = 'mock-token';

        JoblyApi.logout();

        expect(JoblyApi.token).toEqual('');
    })

    test('Sets token to be empty string with token set to empty string', () => {
        JoblyApi.token = 'mock-token';

        JoblyApi.logout();

        expect(JoblyApi.token).toEqual('');
    })
})

describe('Login method', () => {
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    test('successfully log in a user', async () => {
        const { getByText, getByRole } = render(
            <App />
        );

        //Expect on first app load that user clicks log in button and redirects to login form page
        fireEvent.click(getByRole("button", { name: "Log In" }));
        const submitButton = getByRole("button", { name: 'Submit' });
        expect(submitButton).toBeInTheDocument();

        const usernameInput = screen.getByLabelText(/Username/);
        const passwordInput = screen.getByLabelText(/Password/);
        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });

        expect(usernameInput.value).toBe('testuser');
        expect(passwordInput.value).toBe('password');

        fireEvent.click(submitButton);
    })

    // test('unsuccessful log in displays error', async() => {
    //     const { getByText, getByRole } = render(
    //         <App/>
    //     );

    //     //Expect on first app load that user clicks log in button and redirects to login form page
    //     fireEvent.click(getByRole("button", { name: "Log In"}));
    //     const submitButton = getByRole("button", {name: 'Submit'});
    //     expect(submitButton).toBeInTheDocument();

    //     // Simulate a change event for the username input
    //     const usernameInput = screen.getByLabelText(/Username/);
    //     const passwordInput = screen.getByLabelText(/Password/);
    //     fireEvent.change(usernameInput, { target: { value: 'baduser' } });
    //     fireEvent.change(passwordInput, { target: { value: 'badpassword' } });

    //     expect(usernameInput.value).toBe('baduser');
    //     expect(passwordInput.value).toBe('badpassword');

    //     fireEvent.click(submitButton);

    //     await waitFor(() => {
    //         const welcomeMessage = getByText('Invalid username/password');
    //         expect(welcomeMessage).toBeInTheDocument();
    //     })
    // })

})


