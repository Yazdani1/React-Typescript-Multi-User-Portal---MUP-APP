import React, { useState } from "react";
import moment from "moment";
import {
  Navigate,
  useLocation,
  useNavigate,
  Link,
  NavLink,
} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { UserDetailsProps } from "../DataProvider";
import "./UserListsCard.css";

interface UserListsCardProps {
  user: UserDetailsProps;
}

const UserListsCard = ({ user }: UserListsCardProps) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="container testimonial-section"
      id="testimonial"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Link
        to={"/profile/" + user.slug}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div
          className="content"
          // style={{ backgroundColor: "brown", color: "white" }}
        >
          <div className="user-list-user-image">
            <h6>{user.name.substring(0, 2)}</h6>
          </div>

          <p style={{ marginTop: "10px" }}>{user.name}</p>
          <p style={{fontWeight:"bold"}}>
           
              {user.profession}
         
          </p>
          <div style={{ display: "flex" }}>
            <p> {moment(user.date).format("MMM Do YY")}</p>

            {show && (
              <p
                style={{
                  marginLeft: "30px",
                  fontWeight: "bold",
                  color: "yellow",
                }}
              >
                Visit Profile
                <FiArrowRight size={20} />
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserListsCard;
