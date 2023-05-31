import { NavLink } from "react-router-dom"
import "./Nav.css"

/**
 * 
 * 
 */
function Nav() {
 
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
