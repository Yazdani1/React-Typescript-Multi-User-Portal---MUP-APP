import React from "react";
import moment from "moment";
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  NavLink,
} from "react-router-dom";

import CardLayout from "../../components/CardLayout";
import { PostListProps } from "../../DataProvider";
import "./RelatedPosts.css";

interface RelatedPostsProps {
  post: PostListProps;
}

const RelatedPosts = ({ post }: RelatedPostsProps) => {
  return (
    <div className="related-post-card">
      <Link
        to={"/details-post/" + post.slug}
        style={{ textDecoration: "none", color: "black" }}
      >
      
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 ">

              
              <div className="related-post-image">
                <img src={post.image} />
              </div>
            </div>

            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">

            
              <div className="post-info">
                <h6>{post.title.substring(0, 23)}</h6>

                <div className="post-user-info">
                  <Link
                    to={"/profile/" + post.postedBy?.slug}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="profile-pic-post-user">
                      <h6>{post.postedBy.name.substring(0, 2)}</h6>
                    </div>
                  </Link>
                  <div>
                    <Link
                      to={"/profile/" + post.postedBy?.slug}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <p className="posted-by-username">{post.postedBy.name}</p>
                    </Link>

                    <p className="posted-by-username">
                      {moment(post.date).format("MMM Do YY")}.
                    </p>
                    <Link
                      to={"/category/" + post.categoryBy.slug}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <h6
                        className="posted-by-username"
                        style={{ color: "orangered" }}
                      >
                        {post.categoryBy.categoryName}
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
      </Link>
    </div>
  );
};

export default RelatedPosts;
