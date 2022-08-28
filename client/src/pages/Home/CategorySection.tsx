import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import {
  createCategory,
  CreateCategoryProps,
  getCategoryList,
  deleteCategory,
} from "../../API";
import CategoryList from "../Category/CategoryList";
const CategorySection = () => {
  const [categoryList, setCategoryList] = useState<any[]>([]);

  // to get all the category

  const getAllCategory = async () => {
    try {
      const res = await getCategoryList();
      setCategoryList(res.data);
    } catch (error: any) {
      toast.error(error.response && error.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <div >
      {categoryList &&
        categoryList.map((item, index) => (
          <CategoryList category={item} key={index} linkid={true} />
        ))}
    </div>
  );
};

export default CategorySection;
