import React, { Component } from "react";
import {  Route, Routes } from "react-router-dom";
import Jobs from "./Jobs";
import Companies from "./Companies";
import CompanyDetail from "./CompanyDetail";
import NotFound from "./NotFound";
import Homepage from "./Homepage";

  function Routes404() {
    return (
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/companies' element={<Companies />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/companies/:handle' element={<CompanyDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
    );
  }
  

export default Routes404;
