import React from 'react';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import ProfileForm from './ProfileForm';
import userContext from '../userContext';

afterEach(cleanup);

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

const editProfile = jest.fn()

describe("ProfileForm", () => {

    test('Renders profile form correctly', () => {
        const { getByText } = render(
            <userContext.Provider value={mockUserContext}>
                <MemoryRouter>
                    <ProfileForm editProfile={editProfile} />
                </MemoryRouter>
            </userContext.Provider>

        );

        const editProfileTitle = getByText('Profile');
        expect(editProfileTitle).toBeInTheDocument();
    });
});

describe("handleChange function", () => {

    test('handleChange correctly sets form data', async () => {
        const { getByLabelText, getByRole } = render(
            <userContext.Provider value={mockUserContext}>
                <MemoryRouter>
                    <ProfileForm editProfile={editProfile} />
                </MemoryRouter>
            </userContext.Provider>
        );

        const firstNameInput = getByLabelText('First Name');
        const lastNameInput = getByLabelText(/Last Name/);
        const emailInput = getByLabelText(/Email/);

        fireEvent.change(firstNameInput, { target: { value: 'changefn' } });// Simulate a change event for the username input
        fireEvent.change(lastNameInput, { target: { value: 'changeln' } });
        fireEvent.change(emailInput, { target: { value: 'changeemail@gmail.com' } });

        expect(firstNameInput.value).toBe('changefn');
        expect(lastNameInput.value).toBe('changeln');
        expect(emailInput.value).toBe('changeemail@gmail.com');

        const saveChangesButton = getByRole('button', { name: 'Save Changes' })
        await act(async () => {
            fireEvent.click(saveChangesButton);
        });

        expect(editProfile).toBeCalledTimes(1)
    });
})

