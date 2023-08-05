import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import JoblyApi from './joblyApi';



describe('Logout method', () => {
    test('Sets token to be empty string with token set to valid token', () => {
        JoblyApi.token = 'mock-token';

        JoblyApi.logout();

        expect(JoblyApi.token).toEqual('');
    })

    test('Sets token to be empty string with token set to empty string', () => {
        JoblyApi.token = 'mock-token';

        JoblyApi.logout();

        expect(JoblyApi.token).toEqual('');
    })
})




