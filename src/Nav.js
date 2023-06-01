import { NavLink } from "react-router-dom"
import "./Nav.css"
import { useContext } from "react";
import userContext from "./userContext"

/** Renders nav bar with navlinks 
 * 
 * Returns:
 * - Navbar according to logged in vs logged out
 * 
 * App -> Nav
 * 
 * **NavBar**
- [ ] Logic: If currUser not present, load buttons, else load: 
  - [ ] Jobly, Companies, Jobs, Profile, Log Out
- [ ] Logic to check for useContext:
  currUser 
  ? 
  display not-logged-in JSX
  : 
  display logged in JSX

*/
function Nav() {

  const { currentUser } = useContext(userContext);

  return (

    <nav className="Nav">
      {currentUser &&
        <div>
          <NavLink to="/" end>
            Jobly
          </NavLink>
          <NavLink to="/companies" end>
            Companies
          </NavLink>
          <NavLink to="/jobs" end>
            Jobs
          </NavLink>
          <NavLink to="/profile" end>
            Profile
          </NavLink>
          <NavLink to="/" end>
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
