import React, { useEffect, useState } from "react";
import "./UserLists.css";
import UserListsCard from "../../components/UserListsCard";
import CardLayout from "../../components/CardLayout";
import { getUserLists } from "../../API";

const UserLists = () => {
  const [userLists, setUserLists] = useState<any[]>([]);
  const [error, setError] = useState(false);

  const loadAllUserLists = async () => {
    try {
      const res = await getUserLists();

      if (res) {
        setUserLists(res.data);
      }
    } catch (error: any) {
      setError(error.response && error.response.data.error);
    }
  };

  useEffect(() => {
    loadAllUserLists();
  }, []);

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  return (
    <div className="container">
      {showError()}
      <CardLayout title="Visit User Profile"></CardLayout>
      <div className="row">
        {userLists &&
          userLists.map((useritem: any, index: any) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <UserListsCard user={useritem} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserLists;
