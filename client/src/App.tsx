import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home/Home";
import Dashboar from "./pages/Dashboard/Dashboar";
import CreateCategory from "./pages/Category/CreateCategory";
import CreatePost from "./pages/Post/CreatePost";
import SecureLayout from "./SecureLayout";
import { UserProvider } from "./UserContext";
import { CategoryProvider } from "./CategoryContext";

const App = () => {
  return (
    <CategoryProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />

            <Route
              path="/dashboard"
              element={
                <SecureLayout>
                  <Dashboar />
                </SecureLayout>
              }
            />

            <Route
              path="/create-category"
              element={
                <SecureLayout>
                  <CreateCategory />
                </SecureLayout>
              }
            />

            <Route
              path="/create-post"
              element={
                <SecureLayout>
                  <CreatePost />
                </SecureLayout>
              }
            />
          </Routes>
        </BrowserRouter>
        <ScrollToTop
          smooth
          color="white"
          height="20"
          width="20"
          style={{ borderRadius: "90px", backgroundColor: "red" }}
        />
      </UserProvider>
    </CategoryProvider>
  );
};

export default App;
