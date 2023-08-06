import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import JoblyApi from './joblyApi';
import { render, waitFor } from '@testing-library/react';
import userContext from '../userContext';
import { server } from '../mocks/server';

import CompanyList from '../companies/CompanyList';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
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

describe('Login method', () => {
    test('Successfully set a token upon login', async () => {
        const data = { username: "testuser", password: "testpassword" };

        const token = await JoblyApi.login(data);

        expect(token).toBe("mock-token")
    })

    // test('Get error on bad login', async () => {
    //     const data = { username: "baduser", password: "badpassword" };

    //     const err = await JoblyApi.login(data);

    //     console.log()

    //     expect(err.error.message).toBe("Invalid username/password")
    // })
})

describe('signUp method', () => {
    test('Successfully set a token upon sign up', async () => {
        const data = {
            username: "testuser",
            password: "testpassword",
            firstName: "test",
            lastName: "user",
            email: "test-user"
        };

        const token = await JoblyApi.signup(data);

        expect(token).toBe("mock-token")
    })
})

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
    });
});

describe('editProfile method', () => {
    test('Correctly edits a user profile information', async () => {
        const formData = {
            username: 'mockUser',
            firstName: 'mockfn',
            lastName: 'mockln',
            isAdmin: false,
            email: 'mock@email.com',
            applications: [1]
        }

        const response = await JoblyApi.editProfile('originalName', formData)

        expect(response).toEqual({
            username: 'mockUser',
            firstName: 'changedFn',
            lastName: 'changedLn',
            isAdmin: false,
            email: 'mock@email.com',
            applications: [1]
        })
    })
});

describe('getUser method', () => {
    test('Properly gets a single user', async () => {

        const user = await JoblyApi.getUser();

        expect(user).toEqual(
            {
                "username": "fake-user",
                "firstName": "fake",
                "lastName": "user",
                "email": "fake@user.com",
                "isAdmin": false,
                "applications": [1]
            });
    });
});

describe('getCompanies method', () => {
    test('Properly gets and renders all companies ', async () => {
        const companies = await JoblyApi.getCompanies();

        expect(companies).toEqual([
            {
                "handle": "test-handle1",
                "name": "test-name1",
                "description": "test-desc1",
                "numEmployees": 1,
                "logoUrl": null
            },
            {
                "handle": "test-handle2",
                "name": "test-name2",
                "description": "test-desc2",
                "numEmployees": 2,
                "logoUrl": null
            }
        ]);
    });
});

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

        //Company jobs on page
        expect(resolved).toHaveTextContent('fake-job-title');
        expect(resolved).toHaveTextContent('1');
        expect(resolved).toHaveTextContent('0');
    });
});

describe('getJobs method', () => {
    test('Properly gets all jobs', async () => {

        const jobs = await JoblyApi.getJobs();

        expect(jobs).toEqual(
            [
                {
                    "id": 1,
                    "title": "fake-job-title1",
                    "salary": 1,
                    "equity": "2",
                    "companyHandle": "fake-handle1",
                    "companyName": "fake-name1"
                },
                {
                    "id": 2,
                    "title": "fake-job-title2",
                    "salary": 2,
                    "equity": "2",
                    "companyHandle": "fake-handle2",
                    "companyName": "fake-name2"
                }
            ]
        )
    });
});

describe('getSingleJob method', () => {
    test('Properly gets single job', async () => {

        const job = await JoblyApi.getSingleJob();

        expect(job).toEqual(
            {
                "job": {
                    "id": 1,
                    "title": "Conservator, furniture",
                    "salary": 110000,
                    "equity": "0",
                    "company": {
                        "handle": "watson-davis",
                        "name": "Watson-Davis",
                        "description": "Year join loss.",
                        "numEmployees": 819,
                        "logoUrl": "/logos/logo3.png"
                    }
                }
            }
        )
    });
});

describe('applyToJob method', () => {
    test('Properly apply to single job', async () => {
        const data = {
            username: 'mock-user',
            jobId: '1'
        }
        const job = await JoblyApi.applyToJob({
            username: 'mock-user',
            jobId: 'test-id'
        });

        expect(job).toEqual(
            {
                applied: 'test-id'
            }
        )
    });
});

describe('unapplyToJob method', () => {
    test('Properly apply to single job', async () => {
        const job = await JoblyApi.unapplyToJob({
            username: 'mock-user',
            jobId: 'test-id'
        });

        expect(job).toEqual(
            {
                unapplied: 'test-id'
            }
        )
    });
});



