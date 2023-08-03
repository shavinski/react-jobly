import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the Jest DOM matchers

import { MemoryRouter } from 'react-router-dom';
import JobCard from './JobCard';
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

describe("JobCard", () => {
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

    it("renders job card with correct content, not applied", () => {
        const { getByText } = render(
            <userContext.Provider value={mockUserContext}>
                <MemoryRouter>
                    <JobCard job={mockJob1} />
                </MemoryRouter>
            </userContext.Provider>
        );

        const jobTitleElement = getByText(/Test Title 1/);
        expect(jobTitleElement).toBeInTheDocument();

        const companyNameElement = getByText(/test-name1/);
        expect(companyNameElement).toBeInTheDocument();

        const applyButtonElement = getByText(/Apply/);
        expect(applyButtonElement).toBeInTheDocument();

    });

    it("renders company card with correct content, user applied", () => {
        const { getByText } = render(
            <userContext.Provider value={mockUserContext}>
                <MemoryRouter>
                    <JobCard job={mockJob2} />
                </MemoryRouter>
            </userContext.Provider>
        );

        const jobTitleElement = getByText(/Test Title 2/);
        expect(jobTitleElement).toBeInTheDocument();

        const companyNameElement = getByText(/test-name2/);
        expect(companyNameElement).toBeInTheDocument();

        const applyButtonElement = getByText(/Unapply/);
        expect(applyButtonElement).toBeInTheDocument();
    });
});