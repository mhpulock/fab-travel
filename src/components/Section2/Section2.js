import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import people from "../../image/people.gif";

import "./Section2.css";
import Service from "../Service/Service";

const Section2 = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://secret-temple-62781.herokuapp.com/addTour")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const users = user.slice(0, 6);
  return (
    <div className="section2-body">
      <div class="container ">
        <div className="d-flex align-item-center justify-content-start ">
          <p className="mx-2">PACK AND GO</p>
          <hr />
          <img className="people-logo" src={people} alt="people" />
        </div>
        <h2 className="d-flex justify-content-start fontStyle">
          AWESOME TOURS
        </h2>

        <div class="py-5">
          <div className="d-flex justify-content-center">
            <div className="section2_custom_rows">
              {users ? (
                users.map((user) => (
                  <Service key={user.id} user={user}></Service>
                ))
              ) : (
                <Spinner animation="border" variant="warning" />
              )}
            </div>
          </div>
        </div>
        <br />
        <br />
        <Link className="moreButton" to="/service">
          More Tours
        </Link>
      </div>
    </div>
  );
};

export default Section2;
