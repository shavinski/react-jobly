import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Homepage from './Homepage';
import userContext from '../userContext';


afterEach(cleanup);

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

const mockNoUserContext = {
    currentUser: {},
};

describe("Homepage", () => {

    test('Renders homepage with user without any errors', () => {
        const { getByText } = render(
            <userContext.Provider value={mockUserContext}>
                <MemoryRouter>
                    <Homepage />
                </MemoryRouter>
            </userContext.Provider>
        )

        const welcomeFirstName = getByText(/Welcome back, testfn/);
        expect(welcomeFirstName).toBeInTheDocument();
    });

    test('Renders homepage with no user without any errors', () => {
        const { getByText } = render(
            <userContext.Provider value={mockNoUserContext}>
                <MemoryRouter>
                    <Homepage />
                </MemoryRouter>
            </userContext.Provider>);

        const welcomeFirstName = getByText(/All the jobs that you could ever imagine, all in one place./);
        expect(welcomeFirstName).toBeInTheDocument();
    });

});
