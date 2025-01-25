import React, { useState } from "react";
import img1 from "../../assets/images/Home.png";
import img2 from "../../assets/images/cake.png";
import img3 from "../../assets/images/circus.png";
import img4 from "../../assets/images/games.png";
import img5 from "../../assets/images/Safe.png";
import img6 from "../../assets/images/submarine.png";

export default function Modal() {
  let [modalImgs, setModalImg] = useState([img1, img2, img3, img4, img5, img6]);
  let [modalTitles, setModalTitle] = useState([
    "LOG CABIN",
    "TASTY CAKE",
    "CIRCUS TENT",
    "CONTROLER",
    "LOCKED SAFE",
    "SUBMARINE",
  ]);

  return (
    <>
      <div classname="modal bg-danger text-white">
        <div classname="modal fade" id="staticBackdrop"  data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="{-1}"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div classname="modal-dialog">
          <div classname="title">
                {modalTitles.map((title) => {
                  return (
                    <h2 classname="text-center text-uppercase">{title}</h2>
                  );
                })}
                <span classname="global-icon">
                  <i classname="fa-solid fa-star" />
                </span>
              </div>
              {modalImgs.map((img) => {
                return <img className="img-fluid" src={img} />;
              })}

              <p classname="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                amet veniam dolor dignissimos harum ab?
              </p>
            <div classname="modal-content">
              <div classname="modal-header">
                <button
                  type="button"
                  classname="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
