import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SingleVolantear = () => {
  const [allVolantear, setAllVolantear] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getVolantear = async () => {
      const email = user.email;
      const url = `http://localhost:5000/volantear?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setAllVolantear(data);
      } catch (err) {
        if (err.response.status === 401 || err.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getVolantear();
  }, [user, navigate]);

  const handleDeleteData = (id) => {
    console.log(id);
    if (window.confirm("Are you Sure")) {
      fetch(`http://localhost:5000/volantear/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const restData = allVolantear.filter((vol) => vol._id !== id);
            setAllVolantear(restData);
          }
        });
    }
  };
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {allVolantear.map((volantear) => (
          <div className="col">
            <div className="card">
              <img src={volantear.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{volantear.event}</h5>
                <p className="card-text">{volantear.description}</p>
                <div className="text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteData(volantear._id)}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleVolantear;
