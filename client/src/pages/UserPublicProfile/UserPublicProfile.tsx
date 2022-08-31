import React, { useEffect, useState } from "react";
import moment from "moment";

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
import Skelton from "../../components/Skelton";
import "./UserPublicProfile.css";
import { getSingleUserDetails } from "../../API";
import { UserDetailsProps } from "../../DataProvider";

const UserPublicProfile = () => {
  const { slug } = useParams();

  const [userPosts, setUserPosts] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<UserDetailsProps>();

  // to load user published posts

  const loadUserPosts = async () => {
    setLoading(true);
    try {
      const res = await getSingleUserPosts(slug);

      if (res) {
        setUserPosts(res.data);
        setLoading(false);
      }
    } catch (error: any) {
      setError(error.response && error.response.data.error);
      setLoading(false);
    }
  };

  // to load user profile details

  const loadUserProfileDetails = async () => {
    try {
      const res = await getSingleUserDetails(slug);

      if (res) {
        setUserDetails(res.data);
      }
    } catch (error: any) {
      setError(error.response && error.response.data.error);
    }
  };

  useEffect(() => {
    loadUserPosts();
    loadUserProfileDetails();
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
      <div className="container main-container">
        {showError()}
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <CardLayout>

              <div className="profile-pic-header">
                <div className="user-profile-image-postion">
                  <p>{userDetails?.name.substring(0, 2)}</p>
                </div>
              </div>

              <div className="user-profile-details">
                <h6 style={{ paddingBottom: "10px" }}>{userDetails?.name}</h6>
                <span
                  style={{
                    backgroundColor: "black",
                    padding: "3px",
                    color: "yellow",
                    borderRadius: "10px",
                  }}
                >
                  {userDetails?.profession}
                </span>
                <h6 style={{ paddingTop: "10px" }}>
                  Published Posts: {userPosts.length}
                </h6>

                <h6>
                  Joined on: {moment(userDetails?.date).format("MMM Do YY")}.
                </h6>

                <span
                  style={{
                    backgroundColor: "black",
                    padding: "3px",
                    color: "yellow",
                    borderRadius: "10px",
                  }}
                >

                  {userPosts.length>=4 ? "Golden Member" :"Silver Member"}
                  
                </span>


              </div>            
            </CardLayout>
          </div>

          {/* to show usr posts */}

          <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12">
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
                {userPosts &&
                  userPosts.map((userposts, index) => (
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                      <PostCard post={userposts} key={index} />
                    </div>
                  ))}
              </div>
            )}


           {userPosts.length==0 &&  <CardLayout title="This user did not publish any posts yet!"/>}



          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default UserPublicProfile;
