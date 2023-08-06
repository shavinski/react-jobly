import React from "react";
import { Link } from "react-router-dom";
import "./SelectRolePage.css"

function SelectRolePage(){
  return(
    <div className="select-role-container">
      <h1>Are you a company or a job seeker?</h1>
      <div className="button-container">
        <Link to="/company">
          <button className="btn btn-dark">Company</button>
        </Link>
      <Link to="/job-seeker">
        <button className="btn btn-dark"> Job Seeker</button>
      </Link>
      </div>
    </div>
  );
}

export default SelectRolePage;