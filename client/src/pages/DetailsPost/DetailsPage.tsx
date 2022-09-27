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
import Skelton from "../../components/Skelton";

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

  const [loading, setLoading] = useState(true);

  // to load single post
  const loadSinglePosts = async () => {
    setLoading(true);
    try {
      const res = await singlePostDetails(slug);
      if (res) {
        setDetailsSinglePost(res.data);
        setLoading(false);

      }
      console.log(res.data);
    } catch (error: any) {
      setError(error.response && error.response.data.error);
      setLoading(false);

    }
  };

  // to load more posts by the same user

  const loadMorePostsbyUser = async () => {
    try {
      const res = await getMorePostBySameUser(slug);
      if (res) {
        setMorePostsbyUser(res.data);

      }
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
  }, [slug]);

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
        {loading ? (
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <Skelton />
              </div>
            ))}
          </div>
        ) : (
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
              <CardLayout
                title="Related Posts:"
                postCount={relatedPosts?.length}
              ></CardLayout>

              {relatedPosts &&
                relatedPosts.map((item: any, index: any) => (
                  <RelatedPosts post={item} key={index} />
                ))}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default DetailsPage;
