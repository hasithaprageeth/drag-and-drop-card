import React, { useState } from "react";
import "./DragDrop.css";
import { ReactSortable } from "react-sortablejs";

import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";

const DragDrop = () => {
  const [state, setState] = useState([
    { id: 1, name: "James Matte", profession: "Senior Engineer", img: img1 },
    { id: 2, name: "Alisa Taylor", profession: "Web Developer", img: img2 },
    { id: 3, name: "Tim Josh", profession: "Project Manager", img: img3 },
    { id: 4, name: "Charlotte Lit", profession: "Business Analyst", img: img4 },
  ]);

  return (
    <div className="drop">
      <ReactSortable
        group="groupName"
        animation={200}
        delayOnTouchStart={true}
        delay={2}
        list={state}
        setList={setState}
        className="drop-container"
      >
        {state.map((item) => (
          <div key={item.id} className="drop-card">
            <div className="drop-data">
              <img src={item.img} alt="Image" className="drop-img" />
              <div>
                <h1 className="drop-name">{item.name}</h1>
                <span className="drop-profession">{item.profession}</span>
              </div>
            </div>
            <div>
              <a href="#" className="drop-social">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="drop-social">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="drop-social">
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};

export default DragDrop;
