import React, { useEffect, useState, useContext } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  NavLink,
} from "react-router-dom";

import PageLayout from "../PageLayout/PageLayout";
import { getPostsByCategory, getCategoryDetails } from "../../API";
import PostCard from "../../components/PostCard";
import CardLayout from "../../components/CardLayout";
import CategorySection from "../Home/CategorySection";
import Skelton from "../../components/Skelton";
import { CategoryListProps } from "../../DataProvider";
import { CategoryContext } from "../../CategoryContext";
import { PostListProps } from "../../DataProvider";
import "./PostsByCategory.css";

const PostsByCategory = () => {
  const { slug } = useParams();
  const category = useContext(CategoryContext);

  const [postLists, setPostLists] = useState<any[]>([]);
  const [categoryInfo, setCategoryInfo] = useState<CategoryListProps>();
  const [error, setError] = useState(false);
  //   const [categoryPosts,setCategoryPosts] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  // to load posts by category

  const loadPostsByCategory = async () => {
    setLoading(true);
    try {
      const res = await getPostsByCategory(slug);
      if (res) {
        setPostLists(res.data);
        setLoading(false);
      }
    } catch (error: any) {
      setError(error.response && error.response.data.error);
      setLoading(false);
    }
  };

  // to load category info

  const loadCategoryInfo = async () => {
    setLoading(true);

    try {
      const res = await getCategoryDetails(slug);
      if (res) {
        setCategoryInfo(res.data);
        setLoading(false);
      }
    } catch (error: any) {
      setError(error.response && error.response.data.error);
      setLoading(false);
    }
  };

  // to load category posts by clicking on the category

  const loadCategoryPostsByClickingCategory = async (slug: any) => {
    setLoading(true);

    try {
      const res = await getPostsByCategory(slug);
      if (res) {
        setPostLists(res.data);
        setLoading(false);
      }
    } catch (error: any) {
      setError(error.response && error.response.data.error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPostsByCategory();
    loadCategoryInfo();
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
      {showError()}

      <div className="container" style={{ minHeight: "90vh" }}>
        <div className="row">
          {/* to show category */}
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
            <CardLayout title="Category">
              {category &&
                category.map((item: any, index: any) => (
                  <div
                    className="category-lists"
                    onClick={() =>
                      loadCategoryPostsByClickingCategory(item.slug)
                    }
                    key={index}
                    style={{}}
                  >
                    <h6>{item.categoryName}</h6>
                  </div>
                ))}
            </CardLayout>
          </div>

          {showError()}

          <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12">
            <CardLayout>
              <h6>
                {postLists &&
                  postLists.map((item, index) => (
                    <>
                   {index===0 &&  
                      item.categoryBy.categoryName}
                  
                    </>
                  ))} : Total Posts {postLists.length}
              </h6>
            </CardLayout>
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
                {postLists &&
                  postLists.map((postitem, index) => (
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                      <PostCard post={postitem} key={index} />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PostsByCategory;
