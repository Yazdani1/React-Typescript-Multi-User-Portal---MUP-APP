import React, { useEffect, useState } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  NavLink,
} from "react-router-dom";
import PageLayout from "../PageLayout/PageLayout";
import CardLayout from "../../components/CardLayout";
import { getSingleUserPosts } from "../../API";
import PostCard from "../../components/PostCard";

const UserPublicProfile = () => {
  const { slug } = useParams();

  const [userPosts, setUserPosts] = useState<any[]>([]);
  const [error, setError] = useState(false);

  const loadUserPosts = async () => {
    try {
      const res = await getSingleUserPosts(slug);

      if (res) {
        setUserPosts(res.data);
      }
    } catch (error: any) {
      setError(error.response && error.response.data.error);
    }
  };

  useEffect(() => {
    loadUserPosts();
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
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <CardLayout title="User Profile"></CardLayout>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12">
              <div className="row">
                {userPosts &&
                  userPosts.map((userposts, index) => (
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                      <PostCard post={userposts} key={index} />
                    </div>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default UserPublicProfile;
