import React from "react";
import {  Route, Routes } from "react-router-dom";
import JobList from "./JobList";
import CompanyList from "./CompanyList";
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
//TODO: move the route protection from companylist and joblist 

function RoutesList({login, signup}) {
  return (
        <Routes>
          <Route path='/login' element={<LoginForm login={login} />} />
          <Route path='/signup' element={<SignupForm signup={signup}/>} />
          <Route path='/profile' element={<SignupForm />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/companies' element={<CompanyList />} />
          <Route path='/jobs' element={<JobList />} />
          <Route path='/companies/:handle' element={<CompanyDetail />} />
        </Routes>
  );
}

export default RoutesList;
