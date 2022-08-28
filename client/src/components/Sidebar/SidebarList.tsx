import React, { useContext } from "react";
import "./SidebarList.css";
import profilepic from "../../Image/a.jpg";

import {
  FcNightPortrait,
  FcHome,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from "react-icons/fc";

import { FaSignOutAlt } from "react-icons/fa";
import {
  Navigate,
  useLocation,
  useNavigate,
  Link,
  NavLink,
} from "react-router-dom";

import { MdBiotech } from "react-icons/md";

import { MdCastForEducation } from "react-icons/md";

import { UserContext } from "../../UserContext";

interface IPropsSidebarList {
  expandSidebar: boolean;
}

const SidebarList = ({ expandSidebar }: IPropsSidebarList) => {
  const [state, setState] = useContext(UserContext);

  const logOut = () => {
    window.localStorage.removeItem("tokenLogin");
    window.localStorage.removeItem("token");
    // navigate("/signin");
    setState("");
  };

  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile picture" />
          </div>

          <ul>
            <li className="nav-item">
              <Link
                to={"/dashboard"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <FcTodoList size={25} /> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <FcHome size={25} /> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <FcNightPortrait size={25} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/create-category"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <FcFactory size={25} /> Create Category
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <MdBiotech size={25} color="orange" /> Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <MdCastForEducation size={25} color="yellow" /> Education
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <FcSalesPerformance size={25} /> Testimonial
              </Link>
            </li>
            <li className="nav-item" onClick={logOut}>
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <FaSignOutAlt size={25} color="red" />
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            <li className="nav-item">
              <Link
                to={"/dashboard"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <FcTodoList size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <FcHome size={25} />
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <FcNightPortrait size={25} />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to={"/create-category"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <FcFactory size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <MdBiotech size={25} color="orange" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <MdCastForEducation size={25} color="yellow" />
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <FcSalesPerformance size={25} />
              </Link>
            </li>
            <li className="nav-item" onClick={logOut}>
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <FaSignOutAlt size={25} color="red" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
