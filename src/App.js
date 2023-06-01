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

function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      // try {
      //   localStorage.getItem('token')
      // } catch (err) {
      //   console.log(err.message);
      // }
      // const localToken = localStorage.getItem('token');
      // console.log('localToken', localToken);
      if (token) {
        JoblyApi.token = token;
        localStorage.setItem('token', token)
        const { username } = jwt_Decode(token);
        const userData = await JoblyApi.getUser(username);
        setCurrentUser(userData);
      } else {
        localStorage.removeItem('token')
        setCurrentUser(null)
      }
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

  function logout() {
    JoblyApi.logout();
    setToken("");
  }

  return (
    <div className='App'>
      <userContext.Provider value={{ currentUser }}>
        <BrowserRouter>
          <Nav logout={logout}/>
          <RoutesList login={login} signup={signup} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
