import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { MdCardMembership } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { SiMicrodotblog } from "react-icons/si";
import { AiFillMessage } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { FcComboChart, FcFilledFilter } from "react-icons/fc";
import { HiHand } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { getLogedInUserPosts, deletePosts } from "../../API";
import CardLayout from "../../components/CardLayout";

import DashboarPageLayout from "../PageLayout/DashboarPageLayout";

const Dashboar = () => {
  const [allPosts, setAllPosts] = useState<any[]>([]);

  // to load loged in user post

  const loadAllLogedInUserPosts = async () => {
    try {
      const res = await getLogedInUserPosts();
      setAllPosts(res.data);
    } catch (error: any) {
      toast.error(error.response && error.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // to delete post

  const deleteSinglePost = async (id: number) => {
    try {
      const res = await deletePosts(id);

      if (res) {
        loadAllLogedInUserPosts();
      }
    } catch (error: any) {
      toast.error(error.response && error.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    loadAllLogedInUserPosts();
  }, []);

  return (
    <DashboarPageLayout>
      <React.Fragment>
        {/* to show job posts in the table  */}

        <CardLayout>
          <div className="container-fluid main_containers">
            {/* table start */}

            <div className="card table-horizontal">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Published on</th>
                    <th scope="col">Category</th>
                    <th scope="col">View</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allPosts &&
                    allPosts.map((item, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>

                        <td>
                          <img
                            src={item.image}
                            height="100px"
                            width="150px"
                            style={{ objectFit: "cover" }}
                          />
                        </td>

                        <td>{item.title.substring(0, 30)}</td>
                        <td>{item.des?.substring(0, 100)}</td>

                        <td> {moment(item.date).format("MMMM Do YYYY")}</td>
                        <td>{item.categoryBy?.categoryName}</td>

                        <td>
                          <button className="btn btn-primary">View</button>
                        </td>

                        <td>
                          <button className="btn btn-success">
                            <FaEdit size={20} /> Edit
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteSinglePost(item._id)}
                          >
                            <MdDelete size={20} /> Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardLayout>

        <ToastContainer autoClose={8000} />
      </React.Fragment>
    </DashboarPageLayout>
  );
};

export default Dashboar;
