import React from "react";
import CardLayout from "../../components/CardLayout";
import { PostListProps } from "../../DataProvider";
import moment from "moment";
import "./DetailsPost.css";

interface DetailsSinglePost {
  post: PostListProps | undefined;
}

const DetailsPost = ({ post }: DetailsSinglePost) => {
  return (
    <CardLayout>
      <div style={{ margin: "20px" }}>
        <img
          src={post?.image}
          width="100%"
          height="350px"
          style={{ objectFit: "cover" }}
        />
        <div className="postedby-profile-details">
          <div className="postedby-user-image">
             <h6>{post?.postedBy.name.substring(0, 2)}</h6>
          </div>
          <div>
            <p>{post?.postedBy.name}</p>
            <p style={{marginTop:"-15px"}}> {moment(post?.date).format("MMM Do YY")}.</p>
          </div>
        </div>

        <p style={{color:"orangered",fontSize:"25px" }}>{post?.categoryBy.categoryName}</p>

        <h6>{post?.title}</h6>
        <p>{post?.des}</p>
      </div>
    </CardLayout>
  );
};

export default DetailsPost;
