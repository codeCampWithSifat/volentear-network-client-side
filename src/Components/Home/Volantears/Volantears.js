import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import Volantear from "../Volantear/Volantear";



const Volantears = () => {
  const [volantears, setVolantears] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/volantearsService")
      .then((res) => res.json())
      .then((data) => {
        setVolantears(data);
      });
  }, []);
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {volantears.map((volantear) =>
          volantear.length === 0 ? (
            <Loading />
          ) : (
            <Volantear volantear={volantear} key={volantear._id}></Volantear>
          )
        )}
      </div>
    </div>
  );
};

export default Volantears;
