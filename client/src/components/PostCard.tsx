import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { PostListProps } from "../DataProvider";

import "./PostCard.css";

interface IPropsPostCard {
  post: PostListProps;
}

const PostCard = ({ post }: IPropsPostCard) => {
  return (
    <React.Fragment>
      <div className="container team-members" id="teammemebrs">
        <div className="card team-members-item">
          <img src={post.image} />

          <div className="team-info">

            <div className="user-profile-pic">

            <h6>{post.postedBy.name}</h6>

            </div>

            <h6>{post.title}</h6>
            <p>{post.des}</p>

            <div>
            <p>{post.categoryBy.categoryName}</p>
            </div>
          </div>
          <span className="lineforteammembers"></span>

          <div className="team-social-icon">
            <p>
              <GrFacebookOption size={25} />
            </p>
            <p>
              <ImLinkedin2 size={20} />
            </p>
            <p>
              <AiOutlineTwitter size={20} />
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostCard;
