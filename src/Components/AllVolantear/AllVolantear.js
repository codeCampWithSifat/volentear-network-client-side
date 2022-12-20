import React, { useEffect, useState } from "react";

const AllVolantear = () => {
  const [allVolantear, setAllVolantear] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allvolantear")
      .then((res) => res.json())
      .then((data) => {
        setAllVolantear(data);
      });
  }, []);
  const handleDeleteVolantear = (id) => {
    // console.log(id);
    if (window.confirm("Are You Sure ? You Want To Delete This Item")) {
      fetch(`http://localhost:5000/allvolantear/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const restVolantear = allVolantear.filter(
            (volanter) => volanter._id !== id
          );
          setAllVolantear(restVolantear);
        });
    }
  };
  return (
    <div className="container">
      <h2 className="text-primary text-center m-3">All Of The Volantears</h2>
      <table className="table table-striped table-hover mt-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Description</th>
            <th scope="col">Deleted</th>
          </tr>
        </thead>
        {allVolantear.map((volantear) => (
          <tbody>
            <tr>
              <th scope="row">{volantear.name}</th>
              <td>{volantear.email}</td>
              <td>{volantear.description}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteVolantear(volantear._id)}
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AllVolantear;
