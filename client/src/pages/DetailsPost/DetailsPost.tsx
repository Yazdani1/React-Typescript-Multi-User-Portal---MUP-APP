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
        <h1>{post?.title}</h1>
        <p>{post?.des}</p>
        <p>{post?.postedBy.name}</p>
        <p>{post?.categoryBy.categoryName}</p>
        <p> {moment(post?.date).format("MMM Do YY")}.</p>
      </CardLayout>

  );
};

export default DetailsPost;
