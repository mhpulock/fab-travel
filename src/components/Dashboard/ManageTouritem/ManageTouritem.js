import React from "react";
import "./ManageTouritem.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import love from "../../../image/love.png";
import viewimg from "../../../image/view.png";
import comment from "../../../image/comment.png";

const ManageTouritem = (props) => {
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
  } = props.user;

  const handledelete = (Id) => {
    const procced = window.confirm("Are You sure, you want to delete?");

    if (procced) {
      const url = `https://secret-temple-62781.herokuapp.com/dashboard/managetour/${Id}`;
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
            <img className="logo_img" src={img} alt="logo" />
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
                <span className="number">{price}</span> {stayDays}
              </p>
            </div>
            <div>
              <p>{description}</p>
            </div>
            <div className="pb-3">
              <Link to="/dashboard/managetour">
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

export default ManageTouritem;
