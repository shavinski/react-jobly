import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import userContext from '../userContext';
import { server } from '../mocks/server';

import ApplicationList from './ApplicationList';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const testUser = {
    currentUser: {
        username: "testUser",
        firstName: "testfn",
        lastName: "testln",
        email: "test@gmail.com",
        isAdmin: false,
        applications: [2],
    },
};

const testUser2 = {
    currentUser: {
        "username": "testUser2",
        "firstName": "test2FN",
        "lastName": "last2LN",
        "isAdmin": false,
        "email": "test2@test.com",
        "applications": []
    }
}

describe("ApplicationList", () => {
    const handleApplyButton = jest.fn();

    test('Renders correct information with user that has applications', async () => {
        const { getByTestId } = render(
            <userContext.Provider value={testUser}>
                <MemoryRouter>
                    <ApplicationList handleApplyButton={handleApplyButton} />
                </MemoryRouter>
            </userContext.Provider>
        );

        expect(getByTestId('loading')).toHaveTextContent('Loading...');

        const resolved = await waitFor(() => getByTestId('resolved'));

        expect(resolved).toHaveTextContent('All your applications!');
        expect(resolved).toHaveTextContent('fake-job-title2');
    });

    test('Renders correct information with user that has no applications', async () => {
        const { getByTestId } = render(
            <userContext.Provider value={testUser2}>
                <MemoryRouter>
                    <ApplicationList handleApplyButton={handleApplyButton} />
                </MemoryRouter>
            </userContext.Provider>
        );

        expect(getByTestId('loading')).toHaveTextContent('Loading...');

        const resolved = await waitFor(() => getByTestId('resolved'));

        expect(resolved).toHaveTextContent('No applications sent so far!');
    });

});
