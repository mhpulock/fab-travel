import React from "react";
import { Link } from "react-router-dom";
import lover from "../../image/love.png";
import viewimg from "../../image/view.png";
import comment from "../../image/comment.png";
import "./Service.css";

const Service = (props) => {
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
  return (
    <div className="service_body">
      <div className="">
        <div className="card-design2">
          <div className="overflow-hidden">
            <img className="logo_img2" src={img} alt="logo" />
          </div>
          <Link className="saleButton2"></Link>
          <h4 className="city2 cursor2">{city}</h4>
          <div className="cardWidth2">
            <div className="row">
              <Link
                className="col-4 reaction2"
                style={{ borderRight: "1px ridge rgb(180, 172, 172)" }}
              >
                <div className="socialReaction2">
                  <img src={viewimg} alt="view" />
                  <span>{viewer}</span>
                </div>
              </Link>
              <Link
                className="col-4 reaction2"
                style={{ borderRight: "1px ridge rgb(180, 172, 172)" }}
              >
                <div className="socialReaction2">
                  <img src={lover} alt="love" />
                  <span>{reaction}</span>
                </div>
              </Link>
              <Link className="col-4 reaction2">
                <div className="socialReaction2">
                  <img src={comment} alt="comment" />
                  <span>{commenter}</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="p-3">
            <div>
              <p className="position2">
                <span className="dolar2">$</span>
                <span className="number2">{price}</span> {stayDays}
              </p>
            </div>
            <div>
              <p>{description}</p>
            </div>
            <br />
            <div className="pb-3">
              <Link className="bookNow2" to={`/booknow/${_id}`}>
                Book Now
              </Link>
              <Link className="details2" to={`/tourdetails/${_id}`}>
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
