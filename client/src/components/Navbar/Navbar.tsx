import React, { useState, useContext } from "react";
import "./navbar.css";
import {
  Navigate,
  useLocation,
  useNavigate,
  Link,
  NavLink,
} from "react-router-dom";

import { UserContext } from "../../UserContext";

const Navbar = () => {
  let navigate = useNavigate();

  const [state, setState] = useContext(UserContext);

  const [navScrollColor, setNavScrollColor] = useState(false);

  const onChangeNavColor = () => {
    if (window.scrollY >= 100) {
      setNavScrollColor(true);
    } else {
      setNavScrollColor(false);
    }
  };

  window.addEventListener("scroll", onChangeNavColor);

  const logOut = () => {
    window.localStorage.removeItem("tokenLogin");
    window.localStorage.removeItem("token");
    navigate("/signin");
    setState("");
  };

  return (
    <nav
      className={
        navScrollColor ? "navbar-scroll-color navbar-main" : "navbar-main"
      }
    >
      {state && state.token && state.token ? (
        <ul>
         

          <li className="nav-item">
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
               {state && state.user && state.user.name}
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/dashboard"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Dashboard
            </Link>
          </li>
        
        </ul>
      ) : (
        <ul>
        
          <li className="nav-item">
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/signup"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/signin"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign In
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
