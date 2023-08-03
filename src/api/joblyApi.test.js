import React from 'react';
import '@testing-library/jest-dom/extend-expect'; // Import the Jest DOM matchers
import { render, fireEvent, screen, waitFor, findByText, cleanup, act, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter, UNSAFE_RouteContext } from 'react-router-dom';
import CompanyList from '../companies/CompanyList';
import userEvent from '@testing-library/user-event';
// import JoblyApi from './joblyApi';
import App from '../App';
import LoginForm from '../forms/LoginForm';
import userContext from '../userContext';
import axios from 'axios';
import JoblyApi from './joblyApi';


// Mock axios for the test
afterEach(cleanup);

// jest.mock("react-router-dom", () => ({
//     ...jest.requireActual("react-router-dom"),
//     useNavigate: () => jest.fn(),
// }));

// const BASE_URL = 'http://localhost:3001'
const MOCK_USER = {
    applications: [],
    email: 'mock@test.com',
    firstName: 'fn-test',
    lastName: 'ln-test',
    isAdmin: false,
    userName: 'mock-user'
}

describe('Logout sets token to be empty string, deletes token', () => {
    test('Sets token to be empty string with token set to valid token', () => {
        JoblyApi.token = 'mock-token';

        JoblyApi.logout();

        expect(JoblyApi.token).toEqual('')
    })

    test('Sets token to be empty string with token set to empty string', () => {
        JoblyApi.token = 'mock-token';

        JoblyApi.logout();

        expect(JoblyApi.token).toEqual('')
    })
})


