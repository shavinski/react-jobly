import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { server } from '../mocks/server';

import CompanyList from '../companies/CompanyList';


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe('CompanyList', () => {
    test('Properly gets and renders all companies ', async () => {
        const { getByText, getByTestId } = render(
            <MemoryRouter>
                <CompanyList />
            </MemoryRouter>
        )

        expect(getByTestId('loading')).toHaveTextContent('Loading...');

        const resolved = await waitFor(() => getByTestId('resolved'));

        expect(resolved).toHaveTextContent('test-name1');
        expect(resolved).toHaveTextContent('test-desc1');
        expect(resolved).toHaveTextContent('1');
    });
})