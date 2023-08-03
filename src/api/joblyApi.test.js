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
import axiosMock from 'axios';


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

it('Gets companies and renders data', async () => {

//     const companies = await axiosMock.getCompanies.mockResolvedValueOnce();

//     const { getByTestId } = render(
        // <userContext.Provider value={ MOCK_USER }>
        //     <MemoryRouter>
                // <CompanyList />
        //     </MemoryRouter>
        // </userContext.Provider>
    // );
    // expect(getByTestId("loading")).toHaveTextContent('Loading...')

    // const resolvedComapniesList = await waitForElement(() => {
    //     getByTestId('resolved');
    // })

    // expect(resolvedComapniesList).toHaveTextContent('test company 1');
    // expect(resolvedComapniesList).toHaveTextContent('test company 2');
    // expect(axiosMock.getCompanies).toHaveBeenCalled(1);

})



// describe('Get all companies', () => {
//     test('Successfully get all companies', async () => {
//         const companies = await axiosMock.getCompanies();

//         expect(companies).toEqual(
//             [
//                 {
//                     "handle": "test-handle1",
//                     "name": "Test Name1",
//                     "description": "Test1",
//                     "numEmployees": 1,
//                     "logoUrl": null,
//                     "jobs": []
//                 },
//                 {
//                     "handle": "test-handle2",
//                     "name": "Test Name2",
//                     "description": "Test2",
//                     "numEmployees": 1,
//                     "logoUrl": null,
//                     "jobs": []
//                 }
//             ]
//         )
//     })

    // test('Successfully get all companies with request', async () => {
    //     let res = await axiosMock.request('companies/')
    //     console.log('res=>\n', res);
    //     expect(res).toEqual([
    //         {
    //             "handle": "test-handle1",
    //             "name": "Test Name1",
    //             "description": "Test1",
    //             "numEmployees": 1,
    //             "logoUrl": null,
    //             "jobs": []
    //         },
    //         {
    //             "handle": "test-handle2",
    //             "name": "Test Name2",
    //             "description": "Test2",
    //             "numEmployees": 1,
    //             "logoUrl": null,
    //             "jobs": []
    //         }
    //     ])
    // })
// })

// describe('Log in', () => {
//     test('Successfully get a token on log in', async () => {
//         const token = await axiosMock.login({
//             username: 'test123',
//             password: 'password'
//         });
//         expect(token).toEqual({ token: 'mock-token' })
//     });

//     test('Invalid log in receive no token', async () => {
//         try {
//             await axiosMock.login({
//                 username: 'fakeuser',
//                 password: 'badpassword'
//             });
//         } catch (error) {
//             expect(error).toEqual(["Invalid username/password"]);
//         }
//     })
// })



// describe('JoblyAPI login', () => {
//     test("Should display correct homepage", async () => {
//         const { findByText } = render(<App />)
//         expect(await findByText('Log In')).toBeInTheDocument();
//     })

//     test('Should login a user correctly', async () => {
//         const loginSpy = jest.spyOn(axiosMock, 'login');

//         const setup = () => {
//             const { utils } = render(
//                 <MemoryRouter>
//                     <LoginForm login={axiosMock.login} />
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

//         fireEvent.click(screen.getByRole("button", { name: 'Submit' }));

//         // Wait for the login response and check if the login function was called correctly
//         // await waitFor(() => {
//         //     expect(loginSpy).toHaveBeenCalledTimes(1);
//         // });
//     });
//     test('Should flash message if incorrect login', async () => {
//         // const loginError = new Error("Invalid username/password");
//         // const login = jest.fn().mockRejectedValue(loginError);

//         render(
//             <MemoryRouter>
//                 <LoginForm login={login} />
//             </MemoryRouter>
//         );

//         const usernameInput = screen.getByLabelText("Username");
//         const passwordInput = screen.getByLabelText("Password");
//         fireEvent.change(usernameInput, { target: { value: "" } });
//         fireEvent.change(passwordInput, { target: { value: "" } });

//         await act(async () => {
//             fireEvent.click(screen.getByRole("button", { name: "Submit" }));
//         });

//         // Wait for the login response and check if the login function was called correctly
//         // await waitFor(() => {
//         //     expect(loginSpy).toHaveBeenCalledTimes(1);
//         // });

//         // Check if the error message is set
//         expect(screen.getByText('Invalid username/password')).toBeInTheDocument();
//     });
// })


