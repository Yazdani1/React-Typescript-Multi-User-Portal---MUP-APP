import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import PostCard from "../../components/PostCard";
import { getAllPosts } from "../../API";

const PostSection = () => {
  const [allPosts, setAllPosts] = useState<any[]>([]);

  const loadAllPosts = async () => {
    try {
      const res = await getAllPosts();
      setAllPosts(res.data);
    } catch (error: any) {
      toast.error(error.response && error.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    loadAllPosts();
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        {allPosts &&
          allPosts.map((postitem, index) => (
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <PostCard post={postitem} key={index} />
            </div>
          ))}
      </div>

      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
};

export default PostSection;
