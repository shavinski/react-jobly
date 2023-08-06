import React from 'react';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import userContext from '../userContext';

import Nav from './Nav';
import Homepage from '../homepages/Homepage';
import App from '../App';

const testUser = {
    currentUser: {
        "username": "testUser2",
        "firstName": "test2FN",
        "lastName": "last2LN",
        "isAdmin": false,
        "email": "test2@test.com",
        "applications": []
    }
}

describe('Nav bar', () => {
    test('Successfully render the log in nav bar', () => {
        const { getByRole } = render(
            <MemoryRouter>
                <userContext.Provider value={testUser}>
                    <Nav />
                </userContext.Provider>
            </MemoryRouter>
        );

        const profileLogOut = getByRole('button', { name: 'Log out testUser2' });
        expect(profileLogOut).toBeInTheDocument();
    });

    test('Successfully render the logged out nav bar', () => {
        const { getByRole } = render(<App />);

        const profileLogIn = getByRole('button', { name: 'Log In' });
        const profileSignUp = getByRole('button', { name: 'Sign Up' });

        expect(profileLogIn).toBeInTheDocument();
        expect(profileSignUp).toBeInTheDocument();
    });
});