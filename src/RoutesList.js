import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import JobList from "./jobs/JobList";
import CompanyList from "./companies/CompanyList";
import CompanyDetail from "./companies/CompanyDetail";
import Homepage from "./Homepage";
import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";
import ProfileForm from "./forms/ProfileForm";
import ApplicationList from "./applications/ApplicationList";
import userContext from "./userContext";

/** Makes routes for application
 *
 * props:
 * - none
 *
 * App -> RoutesList
 */

function RoutesList({ login, signup, editProfile, handleApplyButton }) {
  const { currentUser } = useContext(userContext);

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      {!currentUser ? (
        <>
          <Route path='/login' element={<LoginForm login={login} />} />
          <Route path='/signup' element={<SignupForm signup={signup} />} />
        </>
      ) : (
        <>
          <Route path='/profile' element={<ProfileForm editProfile={editProfile} />} />
          <Route path='/companies' element={<CompanyList />} />
          <Route path='/jobs' element={<JobList handleApplyButton={handleApplyButton} />} />
          <Route path="/applications" element={<ApplicationList handleApplyButton={handleApplyButton} />} />
          <Route path='/companies/:handle' element={<CompanyDetail handleApplyButton={handleApplyButton} />} />
        </>
      )}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default RoutesList;
