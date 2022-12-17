import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, error1] = useSendPasswordResetEmail(auth);

  if (error || error1) {
    return (
      <div>
        <p>Error: {error?.message} {error1?.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return (
      <div>
        <p>{user?.email}</p>
      </div>
    );
  }
  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
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

        <button
          type="submit"
          className=" btn btn-info bg-info w-100 bg-opacity-50"
        >
          Login
        </button>
      </form>
      <p className="mt-4">
        <button
          type="button"
          onClick={async () => {
            const email = emailRef.current.value;
            const success = await sendPasswordResetEmail(email);
            if(success) {
              toast("Check Your Email And Spam Box And Reset Your Password");
            } else {
              toast("Please  Give Your Email")
            }
          }}
          className="btn btn-link"
        >
          Reset Your Password
        </button>
      </p>
      <p className="mt-4">
        New On Our Site <Link to="/register">Please Register</Link>
      </p>
      <SocialLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;
