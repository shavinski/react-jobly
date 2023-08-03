import React from 'react';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import SearchBar from './SearchBar';

afterEach(cleanup);
const handleSearch = jest.fn()

describe("handleSearchForm", () => {

    test('Renders search bar correctly', () => {
        const { getByText } = render(
            <MemoryRouter>
                <SearchBar handleSearch={handleSearch} />
            </MemoryRouter>
        );

        const searchButton = getByText(/Search/);
        expect(searchButton).toBeInTheDocument();
    });

    test('Typing in search bar works and search button calle handleSearch', async () => {
        const { getByText } = render(
            <MemoryRouter>
                <SearchBar handleSearch={handleSearch} />
            </MemoryRouter>
        );

        const searchInput = screen.getByPlaceholderText(/Enter Search Term.../)
        fireEvent.change(searchInput, { target: { value: 'test search' } });


        const searchButton = screen.getByRole('button', { name: 'Search' });
        await act(async () => {
            fireEvent.click(searchButton);
            expect(handleSearch).toHaveBeenCalledWith('test search');
            expect(handleSearch).toHaveBeenCalledTimes(1);
        });
    });
});

// describe("handleChange function", () => {

//     test('handleChange correctly sets form data', () => {
//         render(
//             <MemoryRouter>
//                 <SearchBar handleSearch={handleSearch} />
//             </MemoryRouter>
//         );
//         // Simulate a change event for the username input
//         const usernameInput = screen.getByLabelText(/Username/);
//         fireEvent.change(usernameInput, { target: { value: 'testUser' } });

//         expect(usernameInput.value).toBe('testUser');
//     });
// })

// describe("handleSubmit function", () => {
//     test('handleSubmit calls handleSearch and navigates on successful handleSearch', async () => {
//         // Create mock handleSearch function and navigate function
//         const handleSearch = jest.fn().mockResolvedValue();

//         // Render the component with the mock functions
//         render(
//             <MemoryRouter>
//                 <SearchBar handleSearch={handleSearch} />
//             </MemoryRouter>
//         );

//         // Fill in the form fields
//         const usernameInput = screen.getByLabelText(/Username/);
//         const passwordInput = screen.getByLabelText(/Password/);
//         fireEvent.change(usernameInput, { target: { value: 'testUser' } });
//         fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

//         // Submit the form
//         const submitButton = screen.getByRole('button', { name: 'Submit' });
//         await act(async () => {
//             fireEvent.click(submitButton);
//         });

//         expect(handleSearch).toHaveBeenCalledTimes(1);
//         expect(handleSearch).toHaveBeenCalledWith({ username: 'testUser', password: 'testPassword' });
//     });
// })