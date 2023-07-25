import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ApplicationList from './ApplicationList';
import login from '../App'

import testUserContext from '../testUserContext'
import App from '../App';

const testUser1 = {
    "username": "testUser1",
    "firstName": "test1FN",
    "lastName": "last1LN",
    "isAdmin": false,
    "email": "test1@test.com",
    "applications": [1, 2, 3]
};

const testUser2 = {
    "username": "testUser2",
    "firstName": "test2FN",
    "lastName": "last2LN",
    "isAdmin": false,
    "email": "test2@test.com",
    "applications": []
}

/**
 * Testing push
 * TODO:
 * - write test that checks user applications show
 *  - test negative if no applications make sure test for "No applications sent so far"
 *
 * - mock a button press that when user clicks unapply button on page it chagnes to apply
 *
 * - integration test that test that when unapply is clicked
 *  - check that unappy switches to -> apply
 *  - check that when user refreshes page that the application is gone
 *
 */

test('test application page', () => {

});