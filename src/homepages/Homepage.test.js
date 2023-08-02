import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import Homepage from './Homepage';
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

test('renders Homepage without any errors', () => {
    render(
        <MockContextProvider>
            <Homepage />
        </MockContextProvider>
    );
});
