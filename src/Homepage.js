/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import JoblyApi from "./joblyApi";
import userContext from "./userContext";



/** Loads starting homepage
 *
 * * Props: 
 * - none
 * 
 * RoutesList -> Homepage
 */

function Homepage() {
  const { currentUser } = useContext(userContext);

  return (
    <div>
        <div>
          <h1>Find a job that works for you!</h1>
          <p>
            All the jobs, every one of them, in one convenient place.
          </p>
        </div>
        {currentUser 
          ? 
          <h2>Welcome back, {currentUser.firstName}</h2>
          :
          <div>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/signup'><button>Signup</button></Link>
          </div>
        }
        

    </div>
  );
}

export default Homepage;
