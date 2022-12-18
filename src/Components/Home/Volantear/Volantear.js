import React from "react";
import { Link } from "react-router-dom";

const Volantear = ({ volantear }) => {
  const { name, img } = volantear;
  return (
    <Link to="/addvolantear"style={{textDecoration: "none"}}>
      <div className="col">
        <div className="card border border-0">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body text-center bg-success bg-opacity-25 rounded-3">
            <h5  className="card-title">{name.toUpperCase()}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Volantear;
