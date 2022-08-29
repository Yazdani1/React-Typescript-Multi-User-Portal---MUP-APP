import React from "react";

import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  NavLink,
} from "react-router-dom";

import CardLayout from "../../components/CardLayout";

const DetailsPost = () => {
  const { slug } = useParams();

  return (
    <div className="container">
      <CardLayout>{slug}</CardLayout>
    </div>
  );
};

export default DetailsPost;
