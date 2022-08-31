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
import CardLayout from "../../components/CardLayout";
import {
  singlePostDetails,
  getMorePostBySameUser,
  getRelatedPostsByCategory,
} from "../../API";
import { PostListProps } from "../../DataProvider";

const DetailsPage = () => {
  const { slug } = useParams();

  const [detailsSinglePost, setDetailsSinglePost] = useState<PostListProps>();
  const [morePostsbyUser, setMorePostsbyUser] = useState([]);
  const [error, setError] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  // to load single post
  const loadSinglePosts = async () => {
    try {
      const res = await singlePostDetails(slug);
      setDetailsSinglePost(res.data);
    } catch (error: any) {
      setError(error.response && error.response.data.error);
    }
  };

  // to load more posts by the same user

  const loadMorePostsbyUser = async () => {
    try {
      const res = await getMorePostBySameUser(slug);
      setMorePostsbyUser(res.data);
    } catch (error: any) {
      setError(error.response && error.response.data.error);
    }
  };

  // to load realated posts by the same category

  const loadRelatedPosts = async () => {
    try {
      const res = await getRelatedPostsByCategory(slug);

      if (res) {
        setRelatedPosts(res.data);
      }
    } catch (error: any) {
      setError(error.response && error.response.data.error);
    }
  };

  useEffect(() => {
    loadSinglePosts();
    loadMorePostsbyUser();
    loadRelatedPosts();
  }, [morePostsbyUser]);

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
            <DetailsPost post={detailsSinglePost} />
            <MorePostsBySameUser
              postlist={morePostsbyUser}
              postedByname={detailsSinglePost?.postedBy?.name}
              postedBySlug={detailsSinglePost?.postedBy.slug}
            />
          </div>

          <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
            <CardLayout title="Related Posts:" postCount={relatedPosts?.length}>

            </CardLayout>

            {relatedPosts &&
              relatedPosts.map((item: any, index: any) => (
                <RelatedPosts post={item} key={index} />
              ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DetailsPage;
