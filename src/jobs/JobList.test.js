import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { server } from '../mocks/server';
import userContext from '../userContext';

import JobList from './JobList';


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

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

describe('JobList test', () => {
    const handleApplyButton = jest.fn()

    test('Properly gets and renders all companies ', async () => {
        const { getByText, getByTestId } = render(
            <MemoryRouter>
                <userContext.Provider value={testUser}>
                    <JobList handleApplyButton={handleApplyButton} />
                </userContext.Provider>
            </MemoryRouter>
        )

        expect(getByTestId('loading')).toHaveTextContent('Loading...');

        const resolved = await waitFor(() => getByTestId('resolved'));

        expect(resolved).toHaveTextContent('fake-job-title1');
        expect(resolved).toHaveTextContent('fake-job-title2');
    });
});
