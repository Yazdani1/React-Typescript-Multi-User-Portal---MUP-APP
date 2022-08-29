import React, { useState } from "react";
import moment from "moment";
import { FiArrowRight } from "react-icons/fi";

import { PostListProps } from "../DataProvider";

import "./PostCard.css";

interface IPropsPostCard {
  post: PostListProps;
}

const PostCard = ({ post }: IPropsPostCard) => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <div
        className="container team-members"
        id="teammemebrs"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="card team-members-item">
          <img src={post.image} />

          <div className="team-info">
            <div className="user-profile-pic">
              <h6>{post.postedBy.name}</h6>
            </div>

            <h6>{post.title}</h6>

            <div></div>
          </div>

          

          <span className="lineforteammembers"></span>

          <div className="date-categroy">
            <p style={{color:"blueviolet",fontSize:"17px",}}>
              {moment(post.date).format("MMM Do YY")}

            
            </p>
            <p style={{color:"blueviolet",fontSize:"17px",}}>{post.categoryBy.categoryName}</p>
          </div>
          <div className="show-read-more-button">
            {show && (
              <p>
                Read More
                <FiArrowRight size={20}/>
              </p>
            )}
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default PostCard;
