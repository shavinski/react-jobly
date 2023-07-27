import { NavLink, Link } from "react-router-dom"
import "./Nav.css"
import { useContext } from "react";
import userContext from "../userContext"

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
        <li className="nav-item m-1">
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
        </li>
        <li className="nav-item m-1">
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li className="nav-item m-1">
          <NavLink className="nav-link" to="/applications">
            Applications
          </NavLink>
        </li>
        <li className="nav-item m-1">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item m-1">
          <Link className="nav-link" to="/" onClick={logout}>
            <button className="btn btn-secondary btn-sm">Log out {currentUser.first_name || currentUser.username}</button>
          </Link>
        </li>

      </ul>
    );
  }

  function loggedOutNav() {
    return (
      <ul className="navbar-nav">
        <li className="nav-item m-1">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item m-1">
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <header>
      <nav className="navbar navbar-expand-md bg-dark fixed-top" data-bs-theme="dark">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <p className="logo">J</p>
          <p className="logo-name">Jobly</p>
        </Link>

        <button
          className="navbar-toggler m-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse flex-column " id="toggleMobileMenu">
          {currentUser ? loggedInNav() : loggedOutNav()}
        </div>
      </nav >
    </header >
  );
}

export default Nav;
