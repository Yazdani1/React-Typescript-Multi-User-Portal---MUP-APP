import React, { useState } from "react";
import "./mavbarmobileview.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Navigate,
  useLocation,
  useNavigate,
  Link,
  NavLink,
} from "react-router-dom";


const NavbarMobileView = () => {
  const [open, setOpen] = useState(false);

  const handleNavbaropen = () => {
    setOpen(!open);
  };

  return (
    <div className="responsive-mobile-view">
      <div className="container-fluid mobile-view-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleNavbaropen} />
        </p>
      </div>

      {open ? (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item">
              <Link to={"/create-category"} style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
           
        

          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobileView;
