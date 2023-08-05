import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import userContext from '../userContext';

import ApplicationList from './ApplicationList';
import JoblyApi from '../api/joblyApi';

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
    afterEach(() => {
        jest.clearAllMocks(); // Clear mock calls after each test
    });

    const handleApplyButton = jest.fn();

    JoblyApi.request = jest.fn(async (endpoint, data = {}, method = 'get') => {
        const mockData = {
            "jobs": [
                {
                    "id": 1,
                    "title": "Conservator, furniture",
                    "salary": 110000,
                    "equity": "0",
                    "companyHandle": "watson-davis",
                    "companyName": "Watson-Davis"
                },
                {
                    "id": 2,
                    "title": "Information officer",
                    "salary": 200000,
                    "equity": "0",
                    "companyHandle": "hall-mills",
                    "companyName": "Hall-Mills"
                }
            ]
        };

        return mockData;
    });
    test('Renders ApplicationList without any errors', async () => {
        const { getByText } = render(
            <userContext.Provider value={mockUserContext}>
                <MemoryRouter>
                    <ApplicationList handleApplyButton={handleApplyButton} />
                </MemoryRouter>
            </userContext.Provider>
        );

        expect(getByTestId('loading')).toHaveTextContent('Loading...');

        const resolved = await waitFor(() => getByTestId('resolved'));

        expect(resolved).toHaveTextContent('Conservator, furniture');
        expect(resolved).toHaveTextContent('Information officer');

        expect(JoblyApi.request).toHaveBeenCalledTimes(1)
        expect(JoblyApi.request).toHaveBeenCalledWith("jobs")
    });

});
