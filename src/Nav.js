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
  
 const {user} = useContext(userContext)
 console.log("NAVBAR USER from context", user)
  return (

    <nav className="Nav">
      <NavLink to="/" end>
        Jobly
      </NavLink>
      <NavLink to="/companies" end>
        Companies
      </NavLink>
      <NavLink to="/jobs" end>
        Jobs
      </NavLink>
    </nav>
  );
}

export default Nav;
