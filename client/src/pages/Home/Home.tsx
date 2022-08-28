import React from "react";
import "./home.css";
import PageLayout from "../PageLayout/PageLayout";
import CardLayout from "../../components/CardLayout";
import CategorySection from "./CategorySection";

const Home = () => {
  return (
    <PageLayout>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">Home post</div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <CardLayout title="Category">
              <CategorySection/>
            </CardLayout>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
