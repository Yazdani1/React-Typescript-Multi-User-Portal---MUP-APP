import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CategoryListProps } from "../../DataProvider";

// const CategoryList = (category: CategoryListProps) => {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <div
//         className="category-list"
//         onMouseEnter={() => setShow(true)}
//         onMouseLeave={() => setShow(false)}
//       >
//         <h6>{category.categoryName}</h6>
//         <h6>{category._id}</h6>
//         <h6>{category.slug}</h6>

//         {show && (
//           <>
//             <button className="btn btn-success">Edit</button>
//             <button className="btn btn-danger">Delete</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

interface CategoryRowProps {
  category: CategoryListProps;
  common?: string;
  onDeleteCategory?: ()=> void;
}

const CategoryList = ({ category, common,onDeleteCategory }: CategoryRowProps) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="category-list"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div style={{ backgroundColor: common }}>
        <h6>{category.categoryName}</h6>
      </div>

      {show && (
        <div >
          <button style={{ marginRight: "20px" }} className="btn btn-success">Edit</button>
          <button className="btn btn-danger" onClick={onDeleteCategory}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
