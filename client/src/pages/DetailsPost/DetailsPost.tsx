import {useState} from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  NavLink,
} from "react-router-dom";
import CardLayout from "../../components/CardLayout";
import { PostListProps } from "../../DataProvider";
import moment from "moment";
import "./DetailsPost.css";
import Skelton from "../../components/Skelton";


interface DetailsSinglePost {
  post: PostListProps | undefined;
}

const DetailsPost = ({ post }: DetailsSinglePost) => {


  const [loading, setLoading] = useState(true);



  return (
    <CardLayout>
      <div style={{ margin: "20px" }}>
        <img
          src={post?.image}
          width="100%"
          height="350px"
          style={{ objectFit: "cover" }}
        />
        <div className="postedby-profile-details">
          <Link
            to={"/profile/" + post?.postedBy.slug}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="postedby-user-image">
              <h6>{post?.postedBy.name.substring(0, 2)}</h6>
            </div>
          </Link>

          <div>
            <Link
              to={"/profile/" + post?.postedBy.slug}
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>{post?.postedBy.name}</p>
            </Link>
            <p style={{ marginTop: "-15px" }}>
              {" "}
              {moment(post?.date).format("MMM Do YY")}.
            </p>
          </div>
        </div>

        <Link
          to={"/category/" + post?.categoryBy?.slug}
          style={{ textDecoration: "none", color: "black" }}
        >
          <p style={{ color: "orangered", fontSize: "25px" }}>
            {post?.categoryBy.categoryName}
          </p>
        </Link>

        <h6>{post?.title}</h6>
        <p>{post?.des}</p>
      </div>
    </CardLayout>
  );
};

export default DetailsPost;
