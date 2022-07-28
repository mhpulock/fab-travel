import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BookNow.css";
import { Link } from "react-router-dom";
import love from "../../image/love.png";
import viewimg from "../../image/view.png";
import comment from "../../image/comment.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";

const BookNow = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [tourDays, setTourDays] = useState();
  const [tourDay, setTourDay] = useState("1");
  const [totalCosts, setTotalCost] = useState();
  const [person, setPerson] = useState();

  const { bookingId } = useParams();
  const [booking, setBooking] = useState({});
  const { register, handleSubmit, reset } = useForm();

  const handlePerson = (e) => {
    const persons = e.target.value;
    // console.log("person " + typeof person);
    const persons2 = parseInt(persons);
    const tourDay1 = parseInt(tourDay);
    const prices = price * persons2 * tourDay1;
    const persons3 = persons2.toString();
    setTotalCost(prices);
    setPerson(persons3);
  };

  const handleTotal = (date) => {
    const startDates = JSON.stringify(date);
    const endDates = JSON.stringify(date);
    const from = startDates.slice(9, 11);
    const from2 = parseInt(from);
    const to = endDates.slice(9, 11);
    const to2 = parseInt(to);
    const tourDay = to2 - from2;
    const tourNight = tourDay;
    const persons = parseInt(person);
    const totalCost = price * tourDay * persons;
    const tourDay2 = tourDay.toString();
    const tourNight2 = tourNight.toString();
    const tourDay3 = `For ( ${tourDay2} Days ${tourNight2} Nights )`;
    console.log("final tour days " + tourDay3);
    setTotalCost(totalCost);
    setTourDays(tourDay3);
    setTourDay(tourDay2);
  };
  const handleTotal2 = (date) => {
    const startDates = JSON.stringify(startDate);
    const endDates = JSON.stringify(date);
    const from = startDates.slice(9, 11);
    const from2 = parseInt(from);
    const to = endDates.slice(9, 11);
    const to2 = parseInt(to);
    const tourDay = to2 - from2;
    const tourNight = tourDay;
    const persons = parseInt(person);
    const totalCost = price * tourDay * persons;
    const tourDay2 = tourDay.toString();
    const tourNight2 = tourNight.toString();
    const tourDay3 = `For ( ${tourDay2} Days ${tourNight2} Nights )`;
    console.log("final tour days " + tourDay3);
    setTotalCost(totalCost);
    setTourDays(tourDay3);
    setTourDay(tourDay2);
  };

  const onSubmit = (data) => {
    data.tourId = _id;
    data.email = user.email;
    data.customerName = user.displayName;
    data.img = img;
    data.city = city;
    data.viewer = viewer;
    data.reaction = reaction;
    data.commenter = commenter;
    data.description = description;
    data.price = totalCosts ? totalCosts : price;
    data.stayDays = tourDays;
    data.tourStart = startDate;
    data.tourEnd = endDate;
    data.date = Date();
    console.log("start date : " + startDate);

    axios
      .post("https://secret-temple-62781.herokuapp.com/mybooking", data)
      .then((res) => {
        if (res.data.insertedId) {
          // sweet alert2

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Booking Complete Succesfully",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };

  useEffect(() => {
    const url = "https://secret-temple-62781.herokuapp.com/addTour";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const result = data.find((booknow) => booknow._id == bookingId);
        console.log(data);
        setBooking(result);
      });
  }, []);

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
  } = booking;

  return (
    <div className="service_body ">
      <div className="">
        <div className="row p-5">
          <div className="col-lg-5 bookingCard">
            <div className="card-design">
              <div className="overflow-hidden">
                <img src={img} alt="logo" />
              </div>
              <Link className="saleButton"></Link>
              <h4 className="city cursor2">{city}</h4>
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

              <div className="p-5">
                <div>
                  <p className="position">
                    <span className="dolar">$</span>
                    <span className="number">{price}</span> {stayDays}
                  </p>
                </div>
                <div>
                  <p>{description}</p>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div>
              <h4 className="orderTitle">
                BEFORE PLACING AN ORDER MUST FILL-UP THE FORM
              </h4>
              <br />
              <div className="d-flex justify-content-center">
                <div>
                  <h5>
                    TOTAL COST :
                    <span className="cost_style">
                      {" "}
                      ${totalCosts ? totalCosts : price}
                    </span>
                  </h5>
                  <h6>{tourDays ? tourDays : stayDays} </h6>

                  <div className="addtourForm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="total_person">
                        <div>
                          <label className="date_label me-3">
                            TOTAL-PERSON
                          </label>
                        </div>
                        <div className="person">
                          <input
                            type="number"
                            name="person"
                            defaultValue="1"
                            min="1"
                            max="150"
                            onChange={(e) => handlePerson(e)}
                          />
                        </div>
                      </div>
                      <input
                        type="text"
                        {...register("cityname", { required: true })}
                        placeholder="Enter Your City Name"
                      />
                      <input
                        type="text"
                        {...register("address", { required: true })}
                        placeholder="Enter Your Full Address"
                      />
                      <input
                        type="number"
                        {...register("zip", { required: true })}
                        placeholder="Enter Your Zip Code"
                      />
                      <input
                        type="number"
                        {...register("mobile", { required: true })}
                        placeholder="Enter Your Mobile Number"
                      />
                      <div className="row">
                        <div className="col-3 ">
                          <label className="date_label">CHECK IN</label>
                        </div>
                        <div className="col-7 ">
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => {
                              setStartDate(date);
                              setEndDate(date);
                              handleTotal(date);
                            }}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                          />
                        </div>
                        <div className="col-2 ">
                          <p>08:00 am</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3">
                          <label className="date_label">CHECK OUT</label>
                        </div>
                        <div className="col-7 ">
                          <DatePicker
                            selected={endDate}
                            onChange={(date) => {
                              setEndDate(date);
                              handleTotal2(date);
                            }}
                            dateFormat="dd/MM/yyyy"
                            minDate={startDate}
                            showYearDropdown
                          />
                        </div>
                        <div className="col-2 ">
                          <p>08:00 am</p>
                        </div>
                      </div>
                      <input
                        className="submitButton"
                        type="submit"
                        value="PLACE ORDER"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
