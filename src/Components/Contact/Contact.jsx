import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container w-50 text-center my-5">
        <h1 className={`text-uppercase `}>Contact Section</h1>
        <div className="line bg-dark"></div>
        <i class="fa-solid fa-star my-3"></i>
        <div className="line bg-dark"></div>

        <div className="form">
          <input
            type="text"
            className=" my-5 form-control border-0 shadow-sm"
            id="exampleFormControlInput1"
            placeholder="userName"
          />
          <input
            type="number"
            className=" my-5 form-control border-0 shadow-sm"
            id="exampleFormControlInput1"
            placeholder="userAge"
          />
          <input
            type="email"
            className=" my-5 form-control border-0 shadow-sm"
            id="exampleFormControlInput1"
            placeholder="userEmail"
          />
          <input
            type="password"
            className=" my-5 form-control border-0 shadow-sm"
            id="exampleFormControlInput1"
            placeholder="userPassword"
          />

          <button className="btn btn-secondary me-auto d-block">
            {" "}
            Send Message{" "}
          </button>
        </div>
      </div>
    </>
  );
}
