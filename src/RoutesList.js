import React from "react";
import {  Route, Routes } from "react-router-dom";
import Jobs from "./Jobs";
import Companies from "./Companies";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from './SignupForm'

/** Makes routes for application 
 *  
 * props:
 * - none 
 *
 * App -> RoutesList
 */

function RoutesList({login, signup}) {
  return (
        <Routes>
          <Route path='/login' element={<LoginForm login={login} />} />
          <Route path='/signup' element={<SignupForm signup={signup}/>} />
          {/* <Route path='/profile' element={<Profile />} /> */}
          <Route path='/' element={<Homepage />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/companies/:handle' element={<CompanyDetail />} />
        </Routes>
  );
}

export default RoutesList;
