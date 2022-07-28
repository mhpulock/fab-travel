import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import username from "../../image/user.png";
import password from "../../image/password.png";
import forgot from "../../image/forgot.png";
import google from "../../image/google.png";
import signup from "../../image/signup.png";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";
  const [isLoading, setIsLoading] = useState(true);

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        const user = result.user;
        saveUser(user.email, user.displayName);
        console.log(result.user);
        setUser(result.user);
      })
      .finally(() => setIsLoading(false))
      .catch((error) => {
        setError(error.message);
      });
  };

  // for login info update on database
  const saveUser = (email, displayName) => {
    const user = { email, displayName };

    fetch("https://secret-temple-62781.herokuapp.com/adduser", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.insertedId) {
          // alert('Order Successfully Completed');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Loged in Successfully",
            showConfirmButton: false,
            timer: 3000,
          });
        }
        console.log(res);
      });
  };
  return (
    isLoading,
    (
      <div className="loginbody">
        <br />
        <h1 className="logintitle">Please Login to Continue</h1>
        <br />

        <div class="container">
          <div class="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
              <div className="cardBody">
                <form className="justify-content-center">
                  <div>
                    <img className="icon" src={username} alt="user-icon" />
                    <input
                      className="my-1"
                      type="email"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <br />
                  <div>
                    <img className="icon" src={password} alt="password" />
                    <input
                      className="my-1"
                      type="password"
                      placeholder="Enter your Password"
                    />
                  </div>
                  <br />
                  <input
                    className="my-1 buttondesign bg-dark text-light"
                    type="submit"
                    value="Login"
                  />
                </form>
                <div>
                  <img className="icon" src={forgot} alt="forgot" />
                  <Link
                    className="text-decoration-none text-danger"
                    to="/register"
                  >
                    <span>Forgot Password</span>
                  </Link>
                </div>

                <br />
                <br />

                <button className="buttondesign" onClick={handleGoogleLogin}>
                  <img className="icon" src={google} alt="google" /> Sign in
                </button>
                <br />
                <br />
                <button className="buttondesign">
                  <img className="icon" src={signup} alt="google" />
                  <Link className="text-decoration-none " to="/register">
                    Register Here
                  </Link>
                </button>
              </div>
            </div>
            <div class="col-lg-4"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
