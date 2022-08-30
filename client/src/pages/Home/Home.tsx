import React from "react";
import "./home.css";
import PageLayout from "../PageLayout/PageLayout";
import CardLayout from "../../components/CardLayout";
import CategorySection from "./CategorySection";
import PostSection from "./PostSection";
import Skelton from "../../components/Skelton";

const Home = () => {
  return (
    <PageLayout>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12">
            <PostSection />

           
          </div>

          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
            <div>
              <CardLayout title="Category">
                <CategorySection />
              </CardLayout>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
