import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import userContext from '../userContext';
import { server } from '../mocks/server';

import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CompanyDetail from '../companies/CompanyDetail';

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

describe('getCompany method', () => {

    const handleApplyButton = jest.fn();

    test('Successfully gets and renders a single company with jobs', async () => {
        const fakeHandle = 'test-handle';

        const { getByTestId } = render(
            <MemoryRouter initialEntries={[`/companies/${fakeHandle}`]}>
                <Routes>
                    <Route path="/companies/:handle" element={
                        <userContext.Provider value={testUser}>
                            <CompanyDetail />
                        </userContext.Provider>
                    } />
                </Routes>
            </MemoryRouter>
        );

        expect(getByTestId('loading')).toHaveTextContent('Loading...');

        const resolved = await waitFor(() => getByTestId('resolved'));

        //Company info portion of page
        expect(resolved).toHaveTextContent('test-name1');
        expect(resolved).toHaveTextContent('test-desc1');

        //Companies job on page
        expect(resolved).toHaveTextContent('fake-job-title');
        // Referring to salary then equity
        expect(resolved).toHaveTextContent('1');
        expect(resolved).toHaveTextContent('0');
    });
});