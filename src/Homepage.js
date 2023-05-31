/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import JoblyApi from "./joblyApi";

/** Loads starting homepage
 *
 * * Props: 
 * - none
 * 
 * RoutesList -> Homepage
 */

function Homepage() {
  return (
    <div>
      <h1>TIME TO GET A JOB</h1>
      <p>
        All the jobs, every one of them, in one convenient place. You're
        welcome.
      </p>
    </div>
  );
}

export default Homepage;
