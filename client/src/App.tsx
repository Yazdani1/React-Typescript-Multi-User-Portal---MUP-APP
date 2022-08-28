import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home/Home";
import Dashboar from "./pages/Dashboard/Dashboar";
import SecureLayout from "./SecureLayout";
import { UserProvider } from "./UserContext";

const App = () => {
  return (
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
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
