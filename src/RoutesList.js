import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import JobList from "./JobList";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from './SignupForm'
import userContext from "./userContext";


/** Makes routes for application 
 *  
 * props:
 * - none 
 *
 * App -> RoutesList
 */

function RoutesList({ login, signup }) {
  const { currentUser } = useContext(userContext);

  function loggedOutRoutes() {
    return (
      <>
        <Route path='/login' element={<LoginForm login={login} />} />
        <Route path='/signup' element={<SignupForm signup={signup} />} />
      </>
    )
  }

  function loggedInRoutes() {
    if (!currentUser) {
      return <Navigate to="/" />;
    }

    return (
      <>
        <Route path='/profile' element={<SignupForm />} />
        <Route path='/companies' element={<CompanyList />} />
        <Route path='/jobs' element={<JobList />} />
        <Route path='/companies/:handle' element={<CompanyDetail />} />
      </>
    )
  }

  // return (
  //   <Routes>
  //     <Route path='/' element={<Homepage />} />
  //     {currentUser ? loggedInRoutes() : loggedOutRoutes()}
  //   </Routes>
  // );

  return (
    <>
      {!currentUser
        ?
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<LoginForm login={login} />} />
          <Route path='/signup' element={<SignupForm signup={signup}/>} />
        </Routes>
        :
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/profile' element={<SignupForm />} />
          <Route path='/companies' element={<CompanyList />} />
          <Route path='/jobs' element={<JobList />} />
          <Route path='/companies/:handle' element={<CompanyDetail />} />
        </Routes>
      }
    </>
  );
}

export default RoutesList;
