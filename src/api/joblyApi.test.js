import React from 'react';
import { render, fireEvent, screen, waitFor, findByText } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import JoblyApi from './joblyApi';
import App from '../App';
import LoginForm from '../forms/LoginForm';

import server from '../mocks/server'
import exp from 'constants';

const BASE_URL = 'http://localhost:3001'

// jest.mock('./joblyApi');
// const login = jest.fn();
// const getCompany = jest.fn();
// const getCompanies = jest.fn();


describe('Get all companies', () => {
    test('Successfully get all companies', async () => {

        const companies = await JoblyApi.getCompanies();
        expect(companies).toEqual(
            [
                {
                    "handle": "test-handle1",
                    "name": "Test Name1",
                    "description": "Test1",
                    "numEmployees": 1,
                    "logoUrl": null,
                    "jobs": []
                },
                {
                    "handle": "test-handle2",
                    "name": "Test Name2",
                    "description": "Test2",
                    "numEmployees": 1,
                    "logoUrl": null,
                    "jobs": []
                }
            ]
        )
    })

    test('Successfully get all companies with request', async () => {
        let res = await JoblyApi.request('companies/', { nameLike: '' })
        expect(res.companies).toEqual([
            {
                "handle": "test-handle1",
                "name": "Test Name1",
                "description": "Test1",
                "numEmployees": 1,
                "logoUrl": null,
                "jobs": []
            },
            {
                "handle": "test-handle2",
                "name": "Test Name2",
                "description": "Test2",
                "numEmployees": 1,
                "logoUrl": null,
                "jobs": []
            }
        ])
    })
})

describe('Log in', () => {
    test('Successfully get a token on log in', async () => {
        const token = await JoblyApi.login({
            username: 'test123',
            password: 'password'
        });
        expect(token).toEqual('mock-token')
    });

    test('Invalid log in receive no token', async () => {
        try {
            await JoblyApi.login({
                username: 'fakeuser',
                password: 'badpassword'
            });
        } catch (error) {
            expect(error).toEqual(["Invalid username/password"]);
        }
    })
})



// describe('JoblyAPI login', () => {
//     test("Should display correct homepage", async () => {
//         const { findByText } = render(<App />)
//         expect(await findByText('Log In')).toBeInTheDocument();
//     })

//     test('Should login a user correctly', async () => {
//         const setup = () => {
//             const utils = render(
//                 <MemoryRouter>
//                     <LoginForm login={login} />
//                 </MemoryRouter>
//             );
//             const usernameInput = screen.getByLabelText('Username');
//             const passwordInput = screen.getByLabelText('Password');
//             return {
//                 usernameInput,
//                 passwordInput,
//                 ...utils,
//             }
//         }

//         const { usernameInput, passwordInput } = setup()

//         fireEvent.change(usernameInput, { target: { value: 'test123' } });
//         fireEvent.change(passwordInput, { target: { value: 'password' } });

//         fireEvent.click(screen.getByText('Submit'));

//         // Wait for the login response and check if the login function was called correctly
//         await waitFor(() => {
//             expect(login).toHaveBeenCalledTimes(1);
//         });
//     });
// })


