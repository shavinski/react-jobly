import React from 'react';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import userContext from '../userContext';
import ApplicationList from './ApplicationList';

const testUser1 = {
    "username": "testUser1",
    "firstName": "test1FN",
    "lastName": "last1LN",
    "isAdmin": false,
    "email": "test1@test.com",
    "applications": [1, 2, 3]
};

const testUser2 = {
    "username": "testUser2",
    "firstName": "test2FN",
    "lastName": "last2LN",
    "isAdmin": false,
    "email": "test2@test.com",
    "applications": []
}

describe("ApplicationList", () => {

    test('Renders ApplicationList without any errors', () => {
        // render(
        //     <userContext.Provider value={testUser1}>
        //         <MemoryRouter>
        //             <ApplicationList />
        //         </MemoryRouter>
        //     </userContext.Provider>
        // );

        // const welcomeFirstName = getByText(/Welcome back, testfn/);
        // expect(welcomeFirstName).toBeInTheDocument();
    });

});
