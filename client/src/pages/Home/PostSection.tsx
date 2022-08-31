import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Skelton from "../../components/Skelton";
import PostCard from "../../components/PostCard";
import { getAllPosts } from "../../API";
import Pagination from "../../Pagination/Pagination";
import CardLayout from "../../components/CardLayout";

const PostSection = () => {
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  //for pagination
  const PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected: slectedPage }: any) => {
    setCurrentPage(slectedPage);
  };
  const offSet = currentPage * PER_PAGE;
  const currrentPagedata = allPosts.slice(offSet, offSet + PER_PAGE);
  //total page count
  const pageCount = Math.ceil(allPosts.length / PER_PAGE);
  //end page paginaion

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
          {currrentPagedata &&
            currrentPagedata.map((postitem, index) => (
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <PostCard post={postitem} key={index} />
              </div>
            ))}

     
           {allPosts.length>=1 && <Pagination
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />}
       
        </div>
      )}

      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
};

export default PostSection;
