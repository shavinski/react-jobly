import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { server } from '../mocks/server';

import JoblyApi from '../api/joblyApi';
import CompanyList from '../companies/CompanyList';


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('getCompanies method', () => {
    // afterEach(() => {
    //     jest.clearAllMocks(); // Clear mock calls after each test
    // });

    // JoblyApi.request = jest.fn(async (endpoint, data = {}, method = 'get') => {
    //     // Mock the data that the method should return
    //     const mockData = {
    //         companies: [
    //             {
    //                 handle: 'test-handle1',
    //                 name: 'test-name1',
    //                 description: 'test-description1',
    //                 numEmployees: 1,
    //                 logoUrl: '',
    //             },
    //             {
    //                 handle: 'test-handle2',
    //                 name: 'test-name2',
    //                 description: 'test-description2',
    //                 numEmployees: 2,
    //                 logoUrl: '',
    //             },
    //         ],
    //     };

    //     return mockData;
    // });

    test('Get all companies successfully ', async () => {
        const { getByTestId } = render(
            <CompanyList />, { wrapper: BrowserRouter }
        );

        //     expect(getByTestId('loading')).toHaveTextContent('Loading...');

        //     const resolved = await waitFor(() => getByTestId('resolved'));

        //     expect(resolved).toHaveTextContent('test-name1');
        //     expect(resolved).toHaveTextContent('test-name2');

        //     expect(JoblyApi.request).toHaveBeenCalledTimes(1)
        //     expect(JoblyApi.request).toHaveBeenCalledWith("companies/", { "nameLike": undefined })
    });
});

describe('getCompanies method', () => {
    test('Properly gets and renders all companies ', async () => {
        const { getByText, getByTestId } = render(
            <CompanyList />, { wrapper: BrowserRouter }
        )

        expect(getByTestId('loading')).toHaveTextContent('Loading...');

        const resolved = await waitFor(() => getByTestId('resolved'));

        expect(resolved).toHaveTextContent('test-name1');
        expect(resolved).toHaveTextContent('test-desc1');
        expect(resolved).toHaveTextContent('1');
    })
})