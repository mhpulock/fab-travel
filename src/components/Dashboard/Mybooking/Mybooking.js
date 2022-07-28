import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Mybookingitem from "../Mybookingitem/Mybookingitem";
import "./Mybooking.css";

const Mybooking = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://secret-temple-62781.herokuapp.com/mybooking")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const buttonclick = () => {
    fetch("https://secret-temple-62781.herokuapp.com/mybooking")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  return (
    <div className="manage_body">
      <div className="d-flex justify-content-center">
        <div className="custom_row">
          {user ? (
            user.map((user) => (
              <Mybookingitem
                key={user.id}
                user={user}
                buttonclick={buttonclick}
              ></Mybookingitem>
            ))
          ) : (
            <Spinner animation="border" variant="warning" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Mybooking;
