/* eslint-disable no-unused-vars */
import "./App.css";
import RoutesList from "./RoutesList";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt_Decode from "jwt-decode";
import Nav from "./Nav";
import JoblyApi from "./joblyApi";
import userContext from "./userContext";

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

const LOCAL_STORAGE_TOKEN_KEY = "token";

function App() {
  const [token, setToken] = useState(localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY));
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      if (token) {
        JoblyApi.token = token;
        localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
        const { username } = jwt_Decode(token);
        const userData = await JoblyApi.getUser(username);
        setCurrentUser(userData);
      } else {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
        setCurrentUser(null);
      }

      setIsLoading(false);
    }

    getUser();
  }, [token]);

  async function login(formData) {
    const token = await JoblyApi.login(formData);
    setToken(token);
  }

  async function signup(formData) {
    const token = await JoblyApi.signup(formData);
    setToken(token);
  }

  async function editProfile(username, formData) {
    try {
      const res = await JoblyApi.editProfile(username, formData);
      console.log(res);
    } catch (err) {
      console.log(err);
      return (
        <div>
          {err.map((message, index) => <p key={index}>{message}</p>)}
        </div>
      )
    }
  }

  function logout() {
    JoblyApi.logout();
    setToken("");
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className='App'>
      <userContext.Provider value={{ currentUser }}>
        <BrowserRouter>
          <Nav logout={logout} />
          <RoutesList login={login} signup={signup} editProfile={editProfile} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
