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

    test('Typing in search bar works and search button called handleSearch', async () => {
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