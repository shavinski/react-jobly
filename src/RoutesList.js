import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import JobList from "./JobList";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
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

  // function loggedOutRoutes() {
  //   return (
  //     <>
  //       <Route path='/login' element={<LoginForm login={login} />} />
  //       <Route path='/signup' element={<SignupForm signup={signup} />} />
  //       <Route path='/profile' element={<Homepage />} />
  //       <Route path='/companies' element={<Homepage />} />
  //       <Route path='/jobs' element={<Homepage />} />
  //       <Route path='/companies/:handle' element={<Homepage />} />
  //     </>
  //   );
  // }

  // function loggedInRoutes() {
  //   return (
  //     <>
  //       <Route path='/login' element={<LoginForm login={login} />} />
  //       <Route path='/signup' element={<SignupForm signup={signup} />} />
  //       <Route path='/profile' element={<SignupForm />} />
  //       <Route path='/companies' element={<CompanyList />} />
  //       <Route path='/jobs' element={<JobList />} />
  //       <Route path='/companies/:handle' element={<CompanyDetail />} />
  //     </>
  //   );
  // }

  // return (
  //   <Routes>
  //     <Route path='/' element={<Homepage />} />
  //     {currentUser ? loggedInRoutes() : loggedOutRoutes()}
  //   </Routes>
  // );
  /**function App() { return (
<div className="App"> <BrowserRouter>
<NavBar /> 
<Routes>

<Route path="/drink" element={<Drink/>} /> 
<Route path="/eat" element={<Eat/>} /> 
<Route path="/" element={<Home/>} />

</Routes>
 </BrowserRouter>
</div> );
} */
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
          <Route path='/profile' element={<SignupForm />} />
          <Route path='/companies' element={<CompanyList />} />
          <Route path='/jobs' element={<JobList />} />
          <Route path='/companies/:handle' element={<CompanyDetail />} />
        </>
      )}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default RoutesList;
