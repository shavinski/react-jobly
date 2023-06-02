/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import JoblyApi from "./joblyApi";
import userContext from "./userContext";
import "./Homepage.css"



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
    <div className="d-flex-column justify-content-center m-5">
          <div className="m-4">
            <h1 className="Homepage-title">Find a job that works for you!</h1>
          </div>
          <div className="m-3">
            <h4 className="Homepage-desc">
              All the jobs, every one of them, in one convenient place.
            </h4>
          </div>
        {currentUser 
          ? 
          <h2>Welcome back, {currentUser.firstName}</h2>
          :
          <div>
            <Link to='/login'><button className="btn btn-primary m-1">Login</button></Link>
            <Link to='/signup'><button className="btn btn-primary btn m-1">Signup</button></Link>
          </div>
        }
        

    </div>
  );
}

export default Homepage;
