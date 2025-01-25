import React from "react";
import style from "../Portfolio/Portfolio.module.css";
import img1 from "../../assets/images/Home.png";
import img2 from "../../assets/images/circus.png";
import img3 from "../../assets/images/cake.png";
import img4 from "../../assets/images/submarine.png";
import img5 from "../../assets/images/Safe.png";
import img6 from "../../assets/images/cake.png";
export default function Portfolio() {
  return (
    <>
      <div className="portfol bg-white mt-5">
        <h3 className=" h1 text-center text-uppercase pt-3">
          portfolio component
        </h3>
        <div className=" d-flex justify-content-center align-items-center">
          <span className="line bg-dark"></span>
          <i className="fas fa-star"></i>
          <span className="line bg-dark"></span>
        </div>
        <div className="container w-75 mb-5 ">
          <div className="row mt-3 g-4">
            <div className="col-md-4">
              <div className="picture position-relative">
                <picture>
                  <img src={img1} className=" w-100 rounded-3 img-fluid " />
                </picture>
                <div
                  className={`${style.icon} layer   bg-opacity-25  d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 button-0   rounded-3`}
                >
                  <i
                    class="fa-solid fa-plus fw-bold display-1 text-light "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal22"
                  ></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="picture position-relative">
                <picture>
                  <img src={img2} className=" w-100 rounded-3 img-fluid " />
                </picture>
                <div
                  className={`${style.icon}  bg-opacity-25  d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 button-0   rounded-3`}
                >
                  <i
                    class="fa-solid fa-plus fw-bold display-1 text-light "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  ></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="picture position-relative">
                <picture>
                  <img src={img3} className=" w-100 rounded-3 img-fluid " />
                </picture>
                <div
                  className={`${style.icon}  bg-opacity-25  d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 button-0   rounded-3`}
                >
                  <i
                    class="fa-solid fa-plus fw-bold display-1 text-light "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal333"
                  ></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="picture position-relative">
                <picture>
                  <img src={img4} className=" w-100 rounded-3 img-fluid " />
                </picture>
                <div
                  className={`${style.icon}  bg-opacity-25  d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 button-0   rounded-3`}
                >
                  <i
                    class="fa-solid fa-plus fw-bold display-1 text-light "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal44"
                  ></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="picture position-relative">
                <picture>
                  <img
                    src={img5}
                    className={`${style.image} w-100 rounded-3 img-fluid  `}
                  />
                </picture>
                <div
                  className={`${style.icon}  bg-opacity-25  d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 button-0   rounded-3`}
                >
                  <i
                    class="fa-solid fa-plus fw-bold display-1 text-light "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal5"
                  ></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="picture position-relative">
                <picture>
                  <img src={img6} className=" w-100 rounded-3 img-fluid" />
                </picture>
                <div
                  className={`${style.icon}  bg-opacity-25  d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 button-0   rounded-3`}
                >
                  <i
                    class="fa-solid fa-plus fw-bold display-1 text-light "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal66"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <>
          {/* Button trigger modal */}

          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal22"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-body">
                <h1 className="text-danger text-center w-50 bg-white mx-auto rounded">
                  Home
                </h1>
                <img src={img1} className="w-100 rounded"></img>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal2"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-body">
                <h1 className="text-danger text-center w-50 bg-white mx-auto rounded">
                  Cake
                </h1>

                <img src={img2} className="w-100"></img>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal333"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-body">
                <h1 className="text-danger text-center w-50 bg-white mx-auto rounded">
                  Circus
                </h1>

                <img src={img3} className="w-100"></img>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal44"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-body">
                <h1 className="text-danger text-center w-50 bg-white mx-auto rounded">
                  Submarine
                </h1>

                <img src={img4} className="w-100"></img>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal5"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-body">
                <h1 className="text-danger text-center w-50 bg-white mx-auto rounded">
                  Safe
                </h1>

                <img src={img5} className="w-100"></img>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal66"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-body">
                <h1 className="text-danger text-center w-50 bg-white mx-auto rounded">
                  Cake
                </h1>

                <img src={img3} className="w-100"></img>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
