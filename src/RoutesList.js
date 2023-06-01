import React from "react";
import {  Route, Routes } from "react-router-dom";
import Jobs from "./Jobs";
import Companies from "./Companies";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";
import Login from "./Login";

/** Makes routes for application 
 *  
 * props:
 * - none 
 *
 * App -> RoutesList
 */

function RoutesList({login}) {
  return (
        <Routes>
          <Route path='/login' element={<Login login={login}/>} />
          {/* <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} /> */}
          <Route path='/' element={<Homepage />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/companies/:handle' element={<CompanyDetail />} />
        </Routes>
  );
}

export default RoutesList;
