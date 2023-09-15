import React from "react";
import Style from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start text-white   ">
        <div className={`${Style.topFooter} py-5 text-center`}>
          <div className="container  p-4">
            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">LOCATION</h5>

                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>

              <div className="col-lg-4 col-md-12 mb-4 mb-md-0 ">
                <h5 className="text-uppercase">AROUND THE WEB</h5>

                <div className="social-icons mt-4">
                  <a href="#">
                    <i className="fa-brands mx-3 p-3 border rounded-circle text-white fa-facebook "></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands mx-3 p-3 border rounded-circle text-white fa-twitter "></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands mx-3 p-3 border rounded-circle text-white fa-instagram "></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands mx-3 p-3 border rounded-circle text-white fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">ABOUT FREELANCER</h5>

                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center p-3 bg-dark">
        Copyright © Your Website 2021
        </div>
      </footer>
    </>
  );
}
