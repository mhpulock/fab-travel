import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Addtour.css";

const Addtour = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://secret-temple-62781.herokuapp.com/addTour", data)
      .then((res) => {
        if (res.data.insertedId) {
          // sweet alert2
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added Succesfully",
            showConfirmButton: false,
            timer: 1000,
          });
          reset();
        }
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h1>Add a New Tour Details</h1>
        <br />
        <div className="d-flex justify-content-center">
          <div>
            <div className="addtourForm">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("img", { required: true })}
                  placeholder="Past Image URL"
                />
                <input
                  {...register("city", { required: true })}
                  placeholder="City Name"
                />
                <input
                  type="number"
                  {...register("viewer", { required: true })}
                  placeholder="Enter Viewer Number"
                />
                <input
                  type="number"
                  {...register("reaction", { required: true })}
                  placeholder="Enter reaction Number"
                />
                <input
                  type="number"
                  {...register("commenter", { required: true })}
                  placeholder="Enter commenter Number"
                />
                <input
                  type="number"
                  {...register("price", { required: true })}
                  placeholder="Enter Price"
                />
                <input
                  {...register("stayDays")}
                  value="For 24 hours only"
                  disabled
                />
                <textarea
                  {...register("description", { required: true })}
                  placeholder="Enter Description"
                />

                <input className="submitButton" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtour;
