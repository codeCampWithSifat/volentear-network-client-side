import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleLoginForm = e => {
    e.preventDefault ();
    const email = emailRef.current.value ;
    const password = passwordRef.current.value ;
    console.log(email,password);
  }
  return (
    <div className="container w-50 mx-auto mt-5">
      <h2 className="m-3 text-primary text-center">Please Login </h2>
      <form onSubmit={handleLoginForm}>
        <div className="mb-3">
          
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=" Email Address"
            ref={emailRef}
            required
          />
          
        </div>
        <div className="mb-3">
         
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder=" Password"
            ref={passwordRef}
            required
          />
        </div>
        
        <button type="submit" className=" btn btn-info bg-info w-100 bg-opacity-50">
         Login
        </button>
      </form>
      <p className="mt-4">
       New On Our Site <Link to="/register">Please Register</Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;
