import React from "react";
import aboutStyle from "./about.module.css";

export default function About() {
  return (
    <>
      <div
        className={`${aboutStyle.aboutBg} d-flex justify-content-center align-items-center`}
      >
        <div className="container text-center text-white w-75">
          <h1 className={`text-uppercase`}>ABOUT COMPONENT</h1>
          <div className={`${aboutStyle.aboutIcon}`}>
            <div className="line"></div>
            <i class="fa-solid fa-star my-3"></i>
            <div className="line"></div>

            <div className="row text-start my-3">
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
