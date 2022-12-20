import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SingleVolantear = () => {
  const [allVolantear, setAllVolantear] = useState([]);
  const [user] = useAuthState(auth)
  useEffect(() => {
    const getVolantear = async () => {
        const email = user.email;
      const url = `http://localhost:5000/volantear?email=${email}`;
      const { data } = await axios.get(url);
      setAllVolantear(data);
    };
    getVolantear();
  }, [user]);
  return (
    <div className="container">
      <h2>Total Number Of Volantear {allVolantear.length}</h2>
    </div>
  );
};

export default SingleVolantear;
