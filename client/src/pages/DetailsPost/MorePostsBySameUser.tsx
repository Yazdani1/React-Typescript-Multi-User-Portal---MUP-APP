import React from "react";
import CardLayout from "../../components/CardLayout";
import { PostListProps } from "../../DataProvider";
import PostCard from "../../components/PostCard";

interface MorePostsProps {
  postlist: string[];
  postedByname: string | undefined;
}

const MorePostsBySameUser = ({ postlist, postedByname }: MorePostsProps) => {
  return (
    <React.Fragment>
      <CardLayout>
        <div style={{ padding: "10px", display: "flex" }}>
          <h5> More Posts By:</h5>
          <h4 style={{marginLeft:"15px",color: "orangered"}}>{postedByname}</h4>
        </div>

        <div className="row">
          {postlist.map((item: any, index: any) => (
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <PostCard post={item} key={index} />
            </div>
          ))}
        </div>
      </CardLayout>
    </React.Fragment>
  );
};

export default MorePostsBySameUser;
