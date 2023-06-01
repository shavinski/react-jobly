/* eslint-disable no-unused-vars */
import "./App.css";
import RoutesList from "./RoutesList";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt_Decode from "jwt-decode";
import Nav from "./Nav";
import JoblyApi from "./joblyApi";

/** Loads initial app
 * 
 * * Props: 
 * - none
 * 
 * App -> { Nav, RoutesList } 
 * 
 * 
 * 
 * 
UseEffect [token]
- json-decode(token) => username
    - send GET w/username
      - setCurrUser with response
 */

function App() {
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    //FIXME: figure out how to get access with the GET request with no token,
    // or finding a way pass a initial token 
    async function getUser() {
      const username = JoblyApi.decodeToken(token);
      console.log(username);
      // const response = await JoblyApi.getUser(username);
      // setCurrentUser(response);
    }

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
      <BrowserRouter>
        <Nav />
        <RoutesList login={login} signup={signup}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
