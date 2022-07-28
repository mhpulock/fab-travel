import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://secret-temple-62781.herokuapp.com/addTour")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="services_body2">
      <div className="d-flex justify-content-center">
        <div className="custom_row2">
          {user ? (
            user.map((user) => <Service key={user.id} user={user}></Service>)
          ) : (
            <Spinner animation="border" variant="warning" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
