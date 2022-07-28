import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ManageTouritem from "../ManageTouritem/ManageTouritem";
import "./Managetour.css";

const Managetour = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://secret-temple-62781.herokuapp.com/addTour")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const buttonclick = () => {
    fetch("https://secret-temple-62781.herokuapp.com/addTour")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  return (
    <div className="manage_body">
      <div className="d-flex justify-content-center">
        <div className="custom_row">
          {user ? (
            user.map((user) => (
              <ManageTouritem
                key={user.id}
                user={user}
                buttonclick={buttonclick}
              ></ManageTouritem>
            ))
          ) : (
            <Spinner animation="border" variant="warning" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Managetour;
