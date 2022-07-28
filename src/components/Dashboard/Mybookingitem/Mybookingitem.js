import React from "react";
import "./Mybookingitem.css";
import { Link } from "react-router-dom";
import love from "../../../image/love.png";
import viewimg from "../../../image/view.png";
import comment from "../../../image/comment.png";
import Swal from "sweetalert2";

const Mybookingitem = (props) => {
  const {
    _id,
    img,
    city,
    viewer,
    reaction,
    commenter,
    price,
    stayDays,
    description,
    tourStart,
    tourEnd,
  } = props.user;
  const from = tourStart.slice(0, 10);
  const to = tourEnd.slice(0, 10);
  const from2 = tourStart.slice(8, 10);
  const from3 = parseInt(from2);
  const to2 = tourEnd.slice(8, 10);
  const to3 = parseInt(to2);
  const tourDay = to3 - from3 + 1;
  const tourNight = tourDay - 1;
  const tourDay2 = tourDay.toString();
  const tourNight2 = tourNight.toString();
  const tourDays = `${tourDay2} Days ${tourNight2} Nights`;

  const handledelete = (Id) => {
    const procced = window.confirm("Are You sure, you want to delete?");

    if (procced) {
      const url = `https://secret-temple-62781.herokuapp.com/dashboard/mybooking/${Id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.deletedCount > 0) {
            // alert('Product Added Successfully');
            props.buttonclick();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Delete Successfully",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
    }
  };

  return (
    <div className="service_body">
      <div className="">
        <div className="card-design">
          <div className="overflow-hidden">
            <img className="logo_img3" src={img} alt="logo" />
          </div>
          <Link className="saleButton"></Link>
          <h4 className="manage_city cursor2">{city}</h4>
          <div className="cardWidth">
            <div className="row">
              <Link
                className="col-4 reaction"
                style={{ borderRight: "1px ridge rgb(180, 172, 172)" }}
              >
                <div className="socialReaction">
                  <img src={viewimg} alt="view" />
                  <span>{viewer}</span>
                </div>
              </Link>
              <Link
                className="col-4 reaction"
                style={{ borderRight: "1px ridge rgb(180, 172, 172)" }}
              >
                <div className="socialReaction">
                  <img src={love} alt="love" />
                  <span>{reaction}</span>
                </div>
              </Link>
              <Link className="col-4 reaction">
                <div className="socialReaction">
                  <img src={comment} alt="comment" />
                  <span>{commenter}</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="py-1 px-2">
            <div>
              <p className="position">
                <span className="dolar">$</span>
                <span className="number">{price}</span> {tourDays}
              </p>
            </div>
            <div>
              <p>{description}</p>
              <p>From: {from}</p>
              <p>To: {to}</p>
            </div>

            <div className="pb-3">
              <Link to="/dashboard/mybooking">
                <button
                  className="managedelete"
                  onClick={() => handledelete(_id)}
                >
                  DELETE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mybookingitem;
