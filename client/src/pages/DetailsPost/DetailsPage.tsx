import React, { useEffect, useState } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  NavLink,
} from "react-router-dom";

import PageLayout from "../PageLayout/PageLayout";
import DetailsPost from "./DetailsPost";
import RelatedPosts from "./RelatedPosts";
import MorePostsBySameUser from "./MorePostsBySameUser";
import PostCard from "../../components/PostCard";
import { singlePostDetails } from "../../API";
import {PostListProps} from "../../DataProvider";

const DetailsPage = () => {
  const { slug } = useParams();

  const [detailsSinglePost, setDetailsSinglePost] = useState();
  const [error, setError] = useState(false);

  const loadSinglePosts = async () => {
    try {
      const res = await singlePostDetails(slug);
      console.log(res.data);
      setDetailsSinglePost(res.data);
    } catch (error: any) {
      setError(error.response && error.response.data.error);
    }
  };

  useEffect(() => {
    loadSinglePosts();
  }, []);

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  return (
    <PageLayout>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12">

            
           
            {showError()}
            <DetailsPost post={detailsSinglePost}/>
            <MorePostsBySameUser />
            {/* {detailsPost.morePostsbySameUser && detailsPost.morePostsbySameUser.map((post,index)=>(
            <PostCard post={}/> */}

          

          </div>

          <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
            <RelatedPosts />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DetailsPage;
