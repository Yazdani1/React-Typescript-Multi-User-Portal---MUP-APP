import React, { useState,useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { UserDetailsProps } from "../DataProvider";
import {getSingleUserPosts} from "../API";
import "./UserListsCard.css";

interface UserListsCardProps {
  user: UserDetailsProps;
}

const UserListsCard = ({ user }: UserListsCardProps) => {
  const [show, setShow] = useState(false);

   // to load user published posts
   const [userAllPosts, setUserAllPosts] = useState<any[]>([]);

   const loadUserPosts = async () => {
    try {
      const res = await getSingleUserPosts(user.slug);

      if (res) {
        setUserAllPosts(res.data);
     
      }
    } catch (error: any) {
    
    }
  };


  useEffect(() => {
    loadUserPosts();
  }, []);


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
        >
          <div className="user-list-user-image">
            <h6>{user.name.substring(0, 2)}</h6>
          </div>

          <p style={{ marginTop: "10px" }}>{user.name}</p>
          <p style={{ fontWeight: "bold" }}>{user.profession}</p>
          <h6>Published posts: {userAllPosts.length}</h6>
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
