import React from "react";
import { useSignInWithGoogle,useSignInWithGithub } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import google from "../../../images/social/google.png";
import Loading from "../../Shared/Loading/Loading";
import github from "../../../images/social/github.png"

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  let errorElement;
  if (error || error1) {
    errorElement = <p> {error?.message} {error1?.message}</p>;
  }
  if (loading || loading1) {
    return <Loading />
  }
  if (user || user1) {
    console.log(user)
    return (
      <div>
        <p>Signed In User: {user?.email} {user1?.email}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-3 px-2">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <h3 className="text-danger">{errorElement}</h3>

      <button
        type="button"
        onClick={() => signInWithGoogle()}
        className="btn btn-info d-block w-50 mx-auto"
      >
        <img src={google} alt="" />
        <span className="mx-4">Google Login</span>
      </button>
      <button
        type="button"
        onClick={() => signInWithGithub()}
        className="btn btn-info d-block w-50 mx-auto mt-3"
      >
        <img src={github} alt="" />
        <span className="mx-4">Github Login</span>
      </button>
    </div>
  );
};

export default SocialLogin;
