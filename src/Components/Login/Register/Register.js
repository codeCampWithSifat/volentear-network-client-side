import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [passwordError, setPasswordError] = useState("")
    
    let errorElement;
    if (error) {
      errorElement = <p> {error?.message} </p>;
    }
  if (loading) {
    return <Loading />
  }
  if (user) {
    console.log(user);
    return (
      <div>
        <p>Registered User: {user?.email}</p>
      </div>
    );
  }

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if(password !== confirmPassword) {
      setPasswordError("Password Not Matched")
      return
    }
    console.log(name, email, password, confirmPassword);
    createUserWithEmailAndPassword(email, password)
  };
  return (
    <div className="container w-50 mx-auto mt-5">
      <h2 className="m-3 text-primary text-center">
        Register Your Account Kindly
      </h2>
      <form onSubmit={handleRegisterForm}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=" Name"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=" Email Address"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder=" Password"
            name="password"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder=" Confirm Password"
            name="confirmPassword"
            required
          />
        </div>
        <h3 className="text-danger">{passwordError}</h3>
        <h3 className="text-danger">{errorElement}</h3>


        <button
          type="submit"
          className=" btn btn-info bg-info w-100 bg-opacity-50"
        >
          Register
        </button>
      </form>
      <p className="mt-4">
        Already Have An Account <Link to="/Login">Please Login</Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
