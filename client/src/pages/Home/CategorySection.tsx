import React, { useState,useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import {
  createCategory,
  CreateCategoryProps,
  getCategoryList,
  deleteCategory,
} from "../../API";
import CategoryList from "../Category/CategoryList";
import {CategoryContext} from "../../CategoryContext";


const CategorySection = () => {


  const categorylist = useContext(CategoryContext);

 
  return (
    <div >
      {categorylist &&
        categorylist.map((item:any, index:any) => (
          <CategoryList category={item} key={index} linkid={true} />
        ))}
    </div>
  );
};

export default CategorySection;
