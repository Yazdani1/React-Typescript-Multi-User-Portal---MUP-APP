import React, { useContext } from "react";
import {
    Navigate,
    useLocation,
    useNavigate,
    Link,
    NavLink,
  } from "react-router-dom";
import "./Subscription.css";
import { RiSendPlaneFill } from "react-icons/ri";

import { UserContext } from "../../UserContext";

const Subscription = () => {
    let navigate = useNavigate();

  const [state] = useContext(UserContext);

  return (
    <div className="container-fluid subscription" id="subscription">
      <div className="container ">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="subscription-title">
              <h5>News Letter. Subscribe Today</h5>
            </div>
            <div className="subscription-form">
              <input type="text" maxLength={100} placeholder="Your E-mail" />
            </div>

            <div
              className="subscribe-button"
           
            >
              <p>
                Subscribe <RiSendPlaneFill size={20} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
