import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEvent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/addevent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Data Inserted Successfully");
        }
      });
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-info text-center m-4">Add Your Event </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Event"
          className=" form-control my-3"
          {...register("name", { required: true })}
        />
        <textarea
          placeholder="Description"
          className=" form-control my-3"
          {...register("description", { required: true })}
        />
        <input
          placeholder="Image Url Link"
          className="form-control my-3"
          type="text"
          {...register("img", { required: true })}
        />
        <input
          value="Add Event"
          className="w-100 my-3 btn btn-info"
          type="submit"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddEvent;
