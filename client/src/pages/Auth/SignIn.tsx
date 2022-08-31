import React, { useEffect, useState, useContext } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  Link,
  NavLink,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../UserContext";
import "./SignIn.css";

import PageLayout from "../PageLayout/PageLayout";
import { userLogin, UserLoginProps } from "../../API";



const SignIn = () => {
  let navigate = useNavigate();

  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  // const userContextInfo = useContext(UserContext);

  const [state, setState] = useContext(UserContext);

  const userSignIn = async (e: any) => {
    e.preventDefault();

    try {
      const payload: UserLoginProps = {
        email: userEmail,
        password: userPassword,
      };

      const res = await userLogin(payload);

      if (res.data) {
        toast.success("You Loged In Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });

        console.log("token check" + res.data.user.name);

        // userContextInfo.setUser({
        //   name: res.data.user?.name,
        //   email: res.data.user?.email,
        //   token: res.data.token,
        // });

        // update user information
        setState({
          user: res.data.user,
          token: res.data.token,
        });

        // save user info in local storage
        localStorage.setItem("tokenLogin", JSON.stringify(res.data));
        window.localStorage.setItem("token", res.data.token);


        // window.localStorage.setItem("tokenLoginInfo",JSON.stringify(res.data.token));

        setUserEmail("");
        setUserPassword("");
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error.response && error.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <PageLayout>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="form-design card">
              <form>
                <div className="text-center">
                  <img
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/lotus.png"
                    style={{ width: "185px" }}
                    alt="logo"
                  />
                  <h5 className="text-center">Sign In To Your Account</h5>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Your E-mail *"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password*"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </div>

                <div className="form-group justify-content-center align-items-center">
                  <button
                    type="submit"
                    name="btnSubmit"
                    className="btnContact"
                    value="Sign In"
                    onClick={(e) => userSignIn(e)}
                  >
                    Sign In
                    {/* {loading ? <SyncOutlined spin /> : "Sign In"} */}
                  </button>
                </div>
                <div className="text-center form-bottom-title">
                  {/* <Link to={"/reset"} style={{ textDecoration: "none" }}>
                    <p>Forgot password?</p>
                  </Link> */}
                  <Link to={"/signup"} style={{ textDecoration: "none" }}>
                    <p>Don't have an account? Create now</p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={8000} />
      </div>
    </PageLayout>
  );
};
export default SignIn;
