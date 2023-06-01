import "./App.css";
import RoutesList from "./RoutesList";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import JoblyApi from "./joblyApi";

/** Loads initial app
 * 
 * * Props: 
 * - none
 * 
 * App -> { Nav, RoutesList } 
 */

function App() {
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  async function login(formData) {
    const token = await JoblyApi.login(formData);
    console.log(token);
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <RoutesList login={login}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
