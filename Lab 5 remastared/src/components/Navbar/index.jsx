import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Navbar = () => {
  const authContext = useContext(AuthContext);
  const handleLogout = () => {
    authContext.logout();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Todo
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav col-11">
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts">
              Posts
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/apiposts">
              Api Posts
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/users">
              Users
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/contactus">
              Contact us
            </NavLink>
          </li>
        </ul>

        <button className="btn btn-danger col-1" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};
