import { NavLink, Link } from "react-router-dom"
import "./Nav.css"
import { useContext } from "react";
import userContext from "./userContext"

/** Renders nav bar with navlinks 
 * 
 * Returns:
 * - Navbar according to logged in vs logged out (derived from userContext)
 * 
 * App -> Nav
 * 
*/
function Nav({ logout }) {
  const { currentUser } = useContext(userContext);

  function loggedInNav() {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
        </li>
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={logout}>
            Log out {currentUser.first_name || currentUser.username}
          </Link>
        </li>
      </ul>
    );
  }

  function loggedOutNav() {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Jobly
        </Link>
        {currentUser ? loggedInNav() : loggedOutNav()}
      </div>
    </nav>
  );
}

export default Nav;
