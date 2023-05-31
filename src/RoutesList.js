import React from "react";
import {  Route, Routes } from "react-router-dom";
import Jobs from "./Jobs";
import Companies from "./Companies";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";

/**
 * 
 * 
 */
function RoutesList() {
  return (
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/companies/:handle' element={<CompanyDetail />} />
        </Routes>
  );
}

export default RoutesList;
