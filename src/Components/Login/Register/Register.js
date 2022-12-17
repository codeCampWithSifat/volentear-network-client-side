import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword ,useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const [passwordError, setPasswordError] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    let errorElement;
    if (error || error1) {
      errorElement = <p> {error?.message} {error1?.message} </p>;
    }
  if (loading || updating) {
    return <Loading />
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const handleRegisterForm = async(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if(password !== confirmPassword) {
      setPasswordError("Password Not Matched")
      return
    } 
   
    await createUserWithEmailAndPassword(email, password)
    await updateProfile({ displayName: name });
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
