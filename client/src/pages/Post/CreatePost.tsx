import React, { useState } from "react";
import Resizer from "react-image-file-resizer";
import { ToastContainer, toast } from "react-toastify";
import "./CreatePost.css";
import DashboarPageLayout from "../PageLayout/DashboarPageLayout";
import CardLayout from "../../components/CardLayout";
import { uploadImage, UploadImageProps } from "../../API";
const axios = require("axios");
const CreatePost = () => {
  const [preview, setPreview] = useState<string>("");
  const [image, setImage] = useState<string>("");

  // to show image name in the form when user upload image

  const [showFileName, setShowFileName] = useState<string>("");

  const handleImage = (e: any) => {
    let file = e.target.files[0];

    setShowFileName(file.name);
    setPreview(window.URL.createObjectURL(file));

    Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try {
        const payload: UploadImageProps = { image: uri };

        const { data } = await uploadImage(payload);
        console.log(data);
        setImage(data.Location);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <DashboarPageLayout>
      <CardLayout title="Create Post">
        {image}
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="form-designs">
              <form>
                <div className="contact-form">
                  <label className="form-lebel">Title:</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Choose Category:</label>
                  <select className="custom-select">
                    <option>Full-time</option>
                    <option>Working Student</option>

                    <option>Part-time</option>
                  </select>
                </div>

                <div className="contact-form">
                  <label className="form-control" style={{height:"50px"}}>
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
                  <textarea maxLength={500} className="form-control" rows={4} />
                </div>

                <div className="button-submit">
                  <p>Create Post</p>
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
