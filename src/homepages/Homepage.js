/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../userContext";
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
    <div className="d-flex-column justify-content-center m-1 home-container">
      <div className="m-4">
        <h1 className="Homepage-title">Find a job that works for you!</h1>
      </div>
      <div className="m-3">
        <h4 className="Homepage-desc m-4">
          All the jobs that you could ever imagine, all in one place.
        </h4>
      </div>
      {currentUser
        ?
        <div className="homepage-container d-flex flex-column align-items-center">
          <h2 className="Homepage-desc" >Welcome back, {currentUser.firstName}</h2>
          <img className="img-fluid" src="https://uploads-ssl.webflow.com/622b91f346bb477f6a17141b/624f364f6ad5b195bc3c1002_BDV-Blog-Illustration.webp" alt="a man and woman sitting at a desk on their laptops"></img>
        </div>
        :
        <div>
          <div>
            <Link className="btn btn-dark m-3" to='/login'>Log In</Link>
            <Link className="btn btn-dark m-3" to='/signup'>Sign Up</Link>
          </div>
          <div className="homepage-container d-flex flex-column align-items-center">
            <img className="img-fluid" src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/124815iCD902962B2466A84?v=v2" alt="and a man and woman having an interesting conversation"></img>
          </div>
        </div>
      }

    </div>
  );
}

export default Homepage;
