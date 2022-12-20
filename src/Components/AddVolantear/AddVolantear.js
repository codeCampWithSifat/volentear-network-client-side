import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddVolantear = () => {
  const [user] = useAuthState(auth);
  // if(user) {
  //     console.log(user);
  // }
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data)
    axios
      .post("http://localhost:5000/addvolantear", data)
      .then((response) => {
        console.log(response);
        const { data } = response;
        if (data.insertedId) {
          reset();
          toast("Add Volantear Successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-info text-center m-4">Register As A Volunteer</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          defaultValue={user.displayName}
          className="form-control my-2"
          {...register("name", { required: true })}
        />
        <input
          placeholder="Email"
          className="form-control my-2"
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        <input
          placeholder="Event Name"
          className="form-control my-2"
          {...register("event", { required: true })}
        />

        <input
          placeholder="Image Url Link"
          className="form-control my-2"
          {...register("img", { required: true })}
        />
        <textarea
          placeholder="Description"
          className="form-control my-2"
          {...register("description", { required: true })}
        />
        <input
          placeholder="Book Upening As A Library"
          className="form-control my-2"
          {...register("libray", { required: true })}
        />
        <input
          value="Volantear Registration"
          className="btn btn-info my-2 w-100"
          type="submit"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddVolantear;
