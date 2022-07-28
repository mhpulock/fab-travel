import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import logo from "../../image/travel-logo.png";
import facebook from "../../image/facebook.png";
import linkedin from "../../image/linkedin.png";
import twitter from "../../image/twitter.png";
import instagram from "../../image/instagram.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="background_color">
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo_resize">
                <h3>Fab</h3>
                <img src={logo} alt="logo" />
              </div>
              <p className="footer_des">
                Fab Travel is a Travel Booking Website. A website that is 100%
                secure without any problems. Also We have Money Back Guarantee.
              </p>
              <div className="social">
                <img className="social-logo" src={facebook} alt="icon" />
                <img className="social-logo" src={twitter} alt="icon" />
                <img className="social-logo" src={linkedin} alt="icon" />
                <img className="social-logo" src={instagram} alt="icon" />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-2">
              <h6>BOOK NOW</h6>
              <div className="item">
                <small className="cursor2">Flights</small>
                <br />
                <small className="cursor2">Tours</small>
                <br />
                <small className="cursor2">Pakages</small>
                <br />
                <small className="cursor2">Car Rent</small>
                <br />
                <small className="cursor2">Cruises</small>
                <br />
                <small className="cursor2">Hotel</small>
              </div>
              <br />
            </div>
            <div className="col-lg-2">
              <h6>TOP DEALS</h6>
              <div className="item">
                <small className="cursor2">Tour Pakages Singapur</small>
                <br />
                <small className="cursor2">Tour Pakages Manila</small>
                <br />
                <small className="cursor2">Tour Pakages New York</small>
                <br />
                <small className="cursor2">Tour Pakages Sanghai</small>
                <br />
                <small className="cursor2">Tour Pakages Hongkong</small>
                <br />
                <small className="cursor2">Tour Pakages Tokyo</small>
              </div>
            </div>
            <div className="col-lg-3">
              <h6>OUR INFORMATION</h6>
              <br />
              <div>
                <div className="d-flex justify-content-center ">
                  <FontAwesomeIcon
                    className="fonticon_color"
                    icon={faLocationDot}
                  />
                  <small className="ms-3 ">
                    House-70, road-13, block-g, Gulsan-1, Dhaka
                  </small>
                </div>
                <div className="d-flex justify-content-center ">
                  <FontAwesomeIcon className="fonticon_color" icon={faPhone} />
                  <small className="ms-3 ">
                    +8801733-235567, +8801992-98982323
                  </small>
                </div>
                <div className="d-flex justify-content-center ">
                  <FontAwesomeIcon
                    className="fonticon_color"
                    icon={faEnvelope}
                  />
                  <small className="ms-5 ">fabtravel@gmail.com</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <span className="copy_write">
          ©2022 All Right Reserved by <span>Fab</span>Travel
        </span>
      </div>
    </div>
  );
};

export default Footer;
