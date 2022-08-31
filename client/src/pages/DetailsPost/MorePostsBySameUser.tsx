import React, { useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  Link,
  NavLink,
} from "react-router-dom";
import CardLayout from "../../components/CardLayout";
import { PostListProps } from "../../DataProvider";
import PostCard from "../../components/PostCard";

interface MorePostsProps {
  postlist: string[];
  postedByname: string | undefined;
  postedBySlug: string | undefined;
}

const MorePostsBySameUser = ({
  postlist,
  postedByname,
  postedBySlug,
}: MorePostsProps) => {
  // to show load more pagination
  const [visible, setVisible] = useState(4);

  const loadMore = () => {
    setVisible((prev) => prev + 2);
  };

  return (
    <React.Fragment>
      <CardLayout>
        <Link
          to={"/profile/" + postedBySlug}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div style={{ padding: "10px", display: "flex" }}>
            <h5> More Posts By:</h5>
            <h4 style={{ marginLeft: "15px", color: "orangered" }}>
              {postedByname}
            </h4>
          </div>
        </Link>

        <div className="row">
          {postlist.slice(0, visible).map((item: any, index: any) => (
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <PostCard post={item} key={index} />
            </div>
          ))}

          {visible >= postlist.length ? null : (
            <span className="load-teach-stack-button" onClick={loadMore}>
              Load More
            </span>
          )}
        </div>
      </CardLayout>
    </React.Fragment>
  );
};

export default MorePostsBySameUser;
