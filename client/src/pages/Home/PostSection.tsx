import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Skelton from "../../components/Skelton";

import PostCard from "../../components/PostCard";
import { getAllPosts } from "../../API";

const PostSection = () => {
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadAllPosts = async () => {

    setLoading(true);


    try {
      const res = await getAllPosts();

      if (res) {
        setAllPosts(res.data);
        setLoading(false);
      } 
    } catch (error: any) {
      toast.error(error.response && error.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);

    }
  };

  useEffect(() => {
    loadAllPosts();
  }, []);



  return (
    <React.Fragment>
      {loading ? (
        //to show skelton 
        <div className="row">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <Skelton />
            </div>
          ))}
        </div>
      ) : (
        <div className="row">
          {allPosts &&
            allPosts.map((postitem, index) => (
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <PostCard post={postitem} key={index} />
              </div>
            ))}
        </div>
      )}

      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
};

export default PostSection;
