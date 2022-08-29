import React from "react";
import "./Footer.css";
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid footer">
        <div className="container">
          <div className="row">

            
            <div className="col-xl-4 col-lg-4">
              <div className="footer-about-section">
                <h6 style={{ color: "white",marginTop:"20px" }}>About</h6>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </p>
                <span className="social-icon">
                  <p>
                    <RiFacebookBoxFill size={30} />
                  </p>
                  <p>
                    <AiFillTwitterCircle size={30} />
                  </p>
                  <p>
                    <RiInstagramFill size={30} />
                  </p>
                  <p>
                    <AiFillLinkedin size={30} />
                  </p>
                </span>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4">
              <div className="footer-Serivce">
                <h6 style={{ color: "white",marginTop:"20px" }}>Services</h6>

                <div className="footer-item">
                  <li> Product Sort</li>
                  <li>Media Marketing</li>
                  <li>Innovation</li>
                  <li> Technology</li>
                  <li>Environment</li>
                </div>
              </div>
            </div>
          

            <div className="col-xl-4 col-lg-4">
              <div className="footer-Serivce">
                <h6 style={{ color: "white",marginTop:"20px"  }}>Customer Care</h6>

                <div className="footer-item">
                  <li>Log In</li>
                  <li>My Account</li>
                  <li>Wish List</li>
                  <li> FAQ</li>
                  <li>Contact Us</li>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;