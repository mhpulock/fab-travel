import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import facebook from "../../image/facebook.png";
import linkedin from "../../image/linkedin.png";
import twitter from "../../image/twitter.png";
import instagram from "../../image/instagram.png";

const Contact = () => {
  return (
    <div>
      <div className="contact_body">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <h2 className="text-lg-start font_Style">CONTACT INFO</h2>
              <p className="text-lg-start">
                Welcome to our Website. We are glad to have you around.
              </p>

              <br />
              <div className="px-3">
                <div className="d-flex justify-content-start my-1">
                  <div className="">
                    <FontAwesomeIcon
                      className="fonticon_color"
                      icon={faPhone}
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="text-start">Phone</h6>
                    <p className="text-start">
                      +8801733-235567, +8801992-98982323
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-start my-1">
                  <div className="">
                    <FontAwesomeIcon
                      className="fonticon_color"
                      icon={faEnvelope}
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="text-start">Email</h6>
                    <p className="text-start">fabtravel@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start my-1">
                  <div className="">
                    <FontAwesomeIcon
                      className="fonticon_color"
                      icon={faLocationDot}
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="text-start">Address</h6>
                    <p className="text-start">
                      House-70, road-13, block-g, Gulsan-1, Dhaka
                    </p>
                  </div>
                </div>
                <div className="socials">
                  <img className="socials-logo" src={facebook} alt="icon" />
                  <img className="socials-logo" src={twitter} alt="icon" />
                  <img className="socials-logo" src={linkedin} alt="icon" />
                  <img className="socials-logo" src={instagram} alt="icon" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 message">
              <h2 className="text-lg-start font_Style">SEND A MESSAGE</h2>
              <p className="text-lg-start">
                Your email address will not be published. Required fields are
                marked.
              </p>

              <br />
              <div className="contact_form">
                <form className="">
                  <input
                    className="my-2 inputfield"
                    type="text"
                    placeholder=" Enter your Name"
                  />

                  <input
                    className="my-2 inputfield"
                    type="email"
                    placeholder=" Enter your Email"
                  />
                  <input
                    className="my-2 inputfield"
                    type="number"
                    placeholder=" Enter Mobile Number"
                  />
                  <textarea
                    className="my-2 inputfield"
                    rows="4"
                    cols="50"
                    name="comment"
                    form="usrform"
                    placeholder=" Comments here"
                  ></textarea>
                  <input
                    className="my-2 submitbutton"
                    type="submit"
                    value="SEND"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
