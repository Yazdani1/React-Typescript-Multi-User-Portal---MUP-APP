import React from "react";
import CardLayout from "../../components/CardLayout";
import { PostListProps } from "../../DataProvider";
import moment from "moment";

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
        <h1>{post?.title}</h1>
        <p>{post?.des}</p>
        <p>{post?.postedBy.name}</p>
        <p>{post?.categoryBy.categoryName}</p>
        <p> {moment(post?.date).format("MMM Do YY")}.</p>
      </div>
    </CardLayout>
  );
};

export default DetailsPost;
