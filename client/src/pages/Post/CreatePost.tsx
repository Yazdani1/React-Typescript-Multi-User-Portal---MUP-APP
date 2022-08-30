import React, { useState, useContext } from "react";
import Resizer from "react-image-file-resizer";
import { ToastContainer, toast } from "react-toastify";
import "./CreatePost.css";
import DashboarPageLayout from "../PageLayout/DashboarPageLayout";
import CardLayout from "../../components/CardLayout";
import {
  uploadImage,
  UploadImageProps,
  createPost,
  PostCreateProps,
} from "../../API";

import { CategoryContext } from "../../CategoryContext";
import { UserContext } from "../../UserContext";

const axios = require("axios");
const CreatePost = () => {
  const categoryList = useContext(CategoryContext);

  const [preview, setPreview] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [loading,setLoading] = useState(false);

  // to show image name in the form when user upload image
  const [showFileName, setShowFileName] = useState<string>("");

  // to post

  const [posTitle, setPostTitle] = useState<string>("");
  const [des, setDes] = useState<string>("");
  const [chooseCategory, setChooseCategory] = useState<string>("");

  const handleImage = (e: any) => {

    setLoading(true);
    let file = e.target.files[0];

    setShowFileName(file.name);
    setPreview(window.URL.createObjectURL(file));

    Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try {
        const payload: UploadImageProps = { image: uri };

        const { data } = await uploadImage(payload);
        console.log(data);
        setImage(data.Location);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    });
  };

  // to create post

  const onSubmitCreatePost = async (e: any) => {
    e.preventDefault();

    setLoading(true)

    try {
      const payload: PostCreateProps = {
        title: posTitle,
        des: des,
        image: image,
        categoryBy: chooseCategory,
      };

      const res = await createPost(payload);

      if (res) {
        toast.success("Post Created Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });

        setPostTitle("");
        setDes("");
        setChooseCategory("");
        setImage("");
        setShowFileName("");
        setPreview("");
        setLoading(false);
      }
    } catch (error: any) {
      toast.error(error.response && error.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);

    }
  };

  return (
    <DashboarPageLayout>
      <CardLayout title="Create Post">
        {image}
        {chooseCategory}
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="form-designs">
              <form>
                <div className="contact-form">
                  <label className="form-lebel">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={posTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                  />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Choose Category:</label>
                  <select
                    className="custom-select"
                    value={chooseCategory}
                    onChange={(e) => setChooseCategory(e.target.value)}
                  >
                    {categoryList &&
                      categoryList.map((categroy: any, index: any) => (
                        <>
                          <option key={index} value={categroy._id}>
                            {categroy.categoryName}
                          </option>
                        </>
                      ))}
                  </select>
                </div>

                <div className="contact-form">
                  <label className="form-control" style={{ height: "50px" }}>
                    {showFileName ? showFileName : "Upload Image"}
                    <input
                      type="file"
                      onChange={handleImage}
                      className="form-control"
                      placeholder="Select a Image"
                      accept="image/*"
                      hidden
                    />
                  </label>
                  {preview && (
                    <img
                      src={preview}
                      height="50px"
                      width="50px"
                      style={{
                        borderRadius: "90px",
                        objectFit: "cover",
                        marginTop: "5px",
                        marginBottom: "5px",
                      }}
                    />
                  )}
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Description:</label>
                  <textarea
                    maxLength={3500}
                    className="form-control"
                    rows={4}
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                  />
                </div>

                <div
                  className="button-submit"
                  onClick={(e) => onSubmitCreatePost(e)}
                >
                  <p>{loading? "Loading...":"Create Post"}</p>
                </div>


              </form>
            </div>
          </div>
        </div>
      </CardLayout>
    </DashboarPageLayout>
  );
};

export default CreatePost;
