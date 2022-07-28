import React from "react";
import "./Header.css";
import logo from "../../image/travel-logo.png";
import avater from "../../image/avater.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  const photo = user.photoURL;
  return (
    <div className="header-body sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-light py-0 "
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/home">
            <div className="navber-logo">
              <h3>Fab</h3>
              <img className="img-logo" src={logo} alt="logo" />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto ">
              {/* profile setting for small screen*/}
              {user?.email && (
                <li className="nav-item dropdown dropdowncard smallScreen">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="nav-item profile smallprofileposition"
                      src={user.photoURL ? user.photoURL : avater}
                      alt="profile"
                    />
                  </Link>
                  <ul
                    className="dropdown-menu mycard"
                    aria-labelledby="navbarDropdown"
                  >
                    <div class="card-width">
                      <div className="d-flex justify-content-center">
                        <div>
                          <div className="d-flex justify-content-center">
                            <img
                              className="nav-item profileExpand"
                              src={user.photoURL ? user.photoURL : avater}
                              alt="profile"
                            />
                          </div>
                          <div class="card-body">
                            <div className="d-flex justify-content-center">
                              <h5 class="card-title">{user.displayName}</h5>
                            </div>
                            <div className="d-flex justify-content-center">
                              <span class="card-text">{user.email}</span>
                            </div>
                            <div className="d-flex justify-content-center">
                              <button className="buttonDesign mt-2">
                                VIEW PROFILE
                              </button>
                            </div>
                            <br />
                            <br />
                          </div>
                          <div className="logoutposition">
                            {user?.email && (
                              <button
                                onClick={logout}
                                className="buttonDesign "
                              >
                                LOGOUT
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
              )}
              <li className="nav-item ">
                <Link className="nav-link link-button cursor" to="/home">
                  HOME
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link link-button cursor" to="/service">
                  SERVICE
                </Link>
              </li>

              {user?.email && (
                <li className="nav-item ">
                  <Link className="nav-link link-button cursor" to="/dashboard">
                    DASHBOARD
                  </Link>
                </li>
              )}
              <li className="nav-item ">
                <Link className="nav-link link-button cursor" to="/contact">
                  CONTACT
                </Link>
              </li>

              {!user?.email && (
                <li className="nav-item">
                  <Link className="nav-link link-button cursor" to="/login">
                    SIGN IN/UP
                  </Link>
                </li>
              )}

              {/* profile setting large screen*/}
              {user?.email && (
                <li className="nav-item dropdown dropdowncard fullScreen">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="nav-item profile largeprofileposition"
                      src={user.photoURL ? user.photoURL : avater}
                      alt="profile"
                    />
                  </Link>
                  <ul
                    className="dropdown-menu mycard"
                    aria-labelledby="navbarDropdown"
                  >
                    <div class="cardbody" style={{ width: "15rem" }}>
                      <div className="d-flex justify-content-center">
                        <img
                          className="nav-item profileExpand"
                          src={user.photoURL ? user.photoURL : avater}
                          alt="profile"
                        />
                      </div>
                      <div class="card-body">
                        <div className="d-flex justify-content-center">
                          <h5 class="card-title">{user.displayName}</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                          <span class="card-text">{user.email}</span>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button className=" buttonDesign mt-2">
                            VIEW PROFILE
                          </button>
                        </div>
                        <br />
                        <br />
                      </div>
                      <div className="logoutposition">
                        {user?.email && (
                          <button onClick={logout} className=" buttonDesign">
                            LOGOUT
                          </button>
                        )}
                      </div>
                    </div>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
