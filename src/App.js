/* eslint-disable no-unused-vars */
import "./App.css";
import RoutesList from "./RoutesList";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt_Decode from "jwt-decode";
import Nav from "./Nav";
import JoblyApi from "./joblyApi";
import userContext from './userContext'

/** Loads initial app
 * 
 * * Props: 
 * - none
 * 
 * State:
 * - token: 
 *    - default value ''
 *    - set on successful login / signup 
 * - currentUser: 
 *    - default null 
 *    - defined if token successfully received 
 *    - Data example:
*              {
*              "username": "testUsername",
		              "firstName": "test-fn",
		              "lastName": "test-ln",
		              "email": "test@gmail.com",
		              "isAdmin": false,
		              "applications": []
*               }
 * 
 * Context: 
 * - userContext contains currentUser data
 * 
 * App -> { Nav, RoutesList } 
 */

function App() {
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    //QUESTION: JWT-Decode here or APIclass?

    async function getUser() {
      if (token){ 
      const username = JoblyApi.decodeToken(token);
      const response = await JoblyApi.getUser(username);
      setCurrentUser(response);
    }}

    getUser();
  },[token])

  async function login(formData) {
    const token = await JoblyApi.login(formData);
    setToken(token);
  }

  async function signup(formData) {
    const token = await JoblyApi.signup(formData);
    alert(token)
    setToken(token);
  }

  return (
    <div className='App'>
      <userContext.Provider value={{currentUser}}>
        {console.log('currentUser App.js =>', currentUser)}
      <BrowserRouter>
        <Nav />
        <RoutesList login={login} signup={signup}/>
      </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
