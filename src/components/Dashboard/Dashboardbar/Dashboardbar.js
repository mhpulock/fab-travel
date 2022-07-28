import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Dashboardbar.css";

const Dashboardbar = () => {
  let { url } = useRouteMatch();
  return (
    <div className="navbar_body ">
      <div>
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <Link
              className="nav-link link-buttons cursor"
              to={`${url}/payment`}
            >
              Payment
            </Link>
          </li>

          <li className="nav-item ">
            <Link
              className="nav-link link-buttons cursor"
              to={`${url}/mybooking`}
            >
              My Booking
            </Link>
          </li>

          <br />

          <span>
            <li className="nav-item ">
              <Link
                className="nav-link link-buttons cursor"
                to={`${url}/managebooking`}
              >
                Manage Bookings
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link link-buttons cursor"
                to={`${url}/addtour`}
              >
                Add Tours
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                className="nav-link link-buttons cursor"
                to={`${url}/managetour`}
              >
                Manage Tours
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link link-buttons cursor"
                to={`${url}/makeadmin`}
              >
                Make Admin
              </Link>
            </li>
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Dashboardbar;
