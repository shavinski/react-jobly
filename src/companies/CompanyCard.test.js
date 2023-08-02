import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CompanyCard from './CompanyCard';
import userContext from '../userContext';


afterEach(cleanup);

// Mock the context provider
const MockContextProvider = ({ children }) => {
    // Mock the context value here
    const currentUser = {
        id: 1,
        username: 'test123',

    };

    return <userContext.Provider value={{ currentUser }}>{children}</userContext.Provider>;
};

describe("CompanyCard", () => {
    // Define a mock company object for testing
    const mockCompany = {
        handle: "example",
        name: "Example Company",
        logoUrl: "https://example.com/logo.png",
        description: "This is an example company.",
    };

    it("renders company card with correct content", () => {
        // Render the CompanyCard component with the mock company object
        const { getByText, getByAltText } = render(
            <MemoryRouter>
                <CompanyCard comp={mockCompany} />
            </MemoryRouter>
        );

        // Assertions
        const companyNameElement = getByText("Example Company");
        expect(companyNameElement).toBeInTheDocument();

        const companyDescriptionElement = getByText("This is an example company.");
        expect(companyDescriptionElement).toBeInTheDocument();

        const companyLogoElement = getByAltText("Example Company");
        expect(companyLogoElement).toHaveAttribute(
            "src",
            "https://example.com/logo.png"
        );

        const linkElement = getByText("Example Company");
        expect(linkElement.tagName).toBe("a");
        expect(linkElement).toHaveAttribute("href", "/companies/example");

        // Alternatively, you can check the click event on the Link if needed
        // Note: In this example, the onClick prop is not used. If you have onClick logic in the Link, you might want to test it as well.
        linkElement.click();
        expect(container.innerHTML).toMatch("Company Details for: example");
    });
});