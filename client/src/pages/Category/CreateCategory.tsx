import React from "react";
import DashboarPageLayout from "../PageLayout/DashboarPageLayout";
import CardLayout from "../../components/CardLayout";
import "./CreateCategory.css";
const CreateCategory = () => {


  return (
    <DashboarPageLayout>
      <div className="category-main">
        <CardLayout title="Create Category">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="form-designs">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      // value={userName}
                      // onChange={(e) => setUserName(e.target.value)}
                      className="form-control"
                      placeholder="Category name..."
                    />
                  </div>

                  <div style={{ marginTop: "20px" }}>
                    <button
                      type="submit"
                      className="btn btn-success"
                      //   onClick={(e) => submitPost(e)}
                    >
                     Create Category
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </CardLayout>
        <div>
            <CardLayout>

                <h6>Node js</h6>
                <h6>Node js</h6>

            </CardLayout>
        </div>
      </div>
    </DashboarPageLayout>
  );
};

export default CreateCategory;
