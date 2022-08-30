import React, { useState } from "react";
import moment from "moment";

import { UserDetailsProps } from "../DataProvider";
import "./UserListsCard.css";

interface UserListsCardProps {
  user: UserDetailsProps;
}

const UserListsCard = ({ user }: UserListsCardProps) => {
  return (
    <div className="container testimonial-section" id="testimonial">
      <div
        className="content"
        // style={{ backgroundColor: "brown", color: "white" }}
      >
        <div className="user-list-user-image">
          <h6>{user.name.substring(0, 2)}</h6>
        </div>


        <p style={{marginTop:"10px"}}>{user.name}</p>
        <p>
          <span className="name" style={{ color: "orange" }}>
            {user.profession}
          </span>
        </p>
        <p> {moment(user.date).format("MMM Do YY")}.</p>
      </div>
    </div>
  );
};

export default UserListsCard;
