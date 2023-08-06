import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the Jest DOM matchers

import { MemoryRouter } from 'react-router-dom';
import CompanyCard from './CompanyCard';


// afterEach(cleanup);

// Mock the context provider
// const MockContextProvider = ({ children }) => {
//     // Mock the context value here
//     const currentUser = {
//         id: 1,
//         username: 'test123',

//     };

//     return <userContext.Provider value={{ currentUser }}>{children}</userContext.Provider>;
// };

describe("CompanyCard", () => {
    // Define a mock company object for testing
    const mockCompany = {
        handle: "example",
        name: "Example Company",
        logoUrl: "https://example.com/logo.png",
        description: "This is an example company.",
    };

    it("renders company card with correct content", () => {
        const { getByText } = render(
            <MemoryRouter>
                <CompanyCard comp={mockCompany} />
            </MemoryRouter>
        );

        const companyNameElement = getByText("Example Company");
        expect(companyNameElement).toBeInTheDocument();

        const companyDescriptionElement = getByText("This is an example company.");
        expect(companyDescriptionElement).toBeInTheDocument();
    });
});