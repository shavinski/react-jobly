import { NavLink } from "react-router-dom"
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
function Nav({logout}) {

  const { currentUser } = useContext(userContext);

  return (

    <nav className="Nav">
      {currentUser &&
        <div>
          <NavLink to="/" end>
            Jobly
          </NavLink>
          <NavLink to="/companies" end>
            CompanyList
          </NavLink>
          <NavLink to="/jobs" end>
            JobList
          </NavLink>
          <NavLink to="/profile" end>
            Profile
          </NavLink>
          <NavLink to="/" onClick={logout} end>
            Log out {currentUser.username}
          </NavLink>
        </div>
      }

      {!currentUser &&
        <div className="Nav">
          <NavLink to="/" end>
            Jobly
          </NavLink>
          <NavLink to="/login" end>
            Login
          </NavLink>
          <NavLink to="/signup" end>
            Signup
          </NavLink>
        </div>
      }
    </nav>
  );
}

export default Nav;
