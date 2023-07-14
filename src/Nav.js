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
      <ul className="navbar-nav ms-auto m-3">
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
    <header>
      <nav className="navbar navbar-expand-md bg-dark d-flex align-items-center" data-bs-theme="dark">
        <Link className="navbar-brand d-flex justify-content-center align-items-center m-2" to="/">
          <p className="logo">J</p>
          <p className="logo-name">Jobly</p>
        </Link>

        <button
          class="navbar-toggler m-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="toggleMobileMenu">
          {currentUser ? loggedInNav() : loggedOutNav()}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
