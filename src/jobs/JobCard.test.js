import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the Jest DOM matchers

import { MemoryRouter } from 'react-router-dom';
import JobCard from './JobCard';
import userContext from '../userContext';


afterEach(cleanup);

const mockUserContext = {
    currentUser: {
        // Add any properties required by the JobCard component
        // For example:
        username: 'testuser',
        applications: [2],
    },
};

describe("CompanyCard", () => {
    // Define a mock company object for testing
    const mockJob1 = {
        id: 1,
        title: "Test Title 1",
        salary: 1,
        equity: "1",
        companyHandle: "test-handle1",
        companyName: "test-name1"
    };

    const mockJob2 = {
        id: 2,
        title: "Test Title 2",
        salary: 2,
        equity: "2",
        companyHandle: "test-handle2",
        companyName: "test-name2"
    };

    it("renders company card with correct content", () => {
        // Render the CompanyCard component with the mock company object
        const { getByText, getByAltText } = render(
            <userContext.Provider value={mockUserContext}>
                <MemoryRouter>
                    <JobCard job={mockJob1} />
                </MemoryRouter>
            </userContext.Provider>
        );

        // Assertions
        const jobTitleElement = screen.getByText(/Test Title 1/);
        expect(jobTitleElement).toBeInTheDocument();

        const applyButtonElement = screen.getByText(/Apply/);
        expect(jobTitleElement).toBeInTheDocument();

    });
});