import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
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

describe("Homepage", () => {

    test('Renders homepage without any errors', () => {
        // const { getByText } = render(
        //     <userContext.Provider value={mockUserContext}>
        //         <MemoryRouter>
        //             <Homepage />
        //         </MemoryRouter>
        //     </userContext.Provider>
        // );

        // const welcomeFirstName = getByText(/Welcome back, testfn/);
        // expect(welcomeFirstName).toBeInTheDocument();
    });
    
});
