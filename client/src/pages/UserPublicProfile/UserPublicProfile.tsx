import React from "react";
import {
    useParams,
    useLocation,
    useNavigate,
    Link,
    NavLink,
  } from "react-router-dom";
import PageLayout from "../PageLayout/PageLayout";

const UserPublicProfile = () => {
    const { slug } = useParams();

  return (
    <PageLayout>
      <div>{slug}</div>
    </PageLayout>
  );
};

export default UserPublicProfile;
