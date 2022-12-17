import React, { useEffect, useState } from "react";
import Volantear from "../Volantear/Volantear";

// const volantears = [
//     {name : "vote-Register" , img: "https://i.ibb.co/kXmpCLK/vote-Register.png"},
//     {name : "stuffed-Animals" , img: "https://i.ibb.co/qdK8K3W/stuffed-Animals.png"},
//     {name : "study-Group" , img: "https://i.ibb.co/yPKvSNG/study-Group.png"},
//     {name : "school-shiffiles" , img: "https://i.ibb.co/CtmX84r/school-Suffiles.png"},
//     {name : "river-clean" , img: "https://i.ibb.co/Sw3hgqx/river-Clean.png"},
//     {name : "refuse-shleter" , img: "https://i.ibb.co/vxVz6z2/refuse-Shelter.png"},
//     {name : "newBooks" , img: "https://i.ibb.co/26vMRtS/newBooks.png"},
//     {name : "music-lessons" , img: "https://i.ibb.co/vcCdRpc/music-Lessons.png"},
// ]

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
            "Loading..."
          ) : (
            <Volantear volantear={volantear} key={volantear.name}></Volantear>
          )
        )}
      </div>
    </div>
  );
};

export default Volantears;
