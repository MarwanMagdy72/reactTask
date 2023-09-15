import React from "react";
import img from "../../assets/NotFound.jpg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <img src={img} alt="Not Found!" className="w-100" />

      <div className="goToHomeBtn text-center">
        <Link className="btn btn-primary my-3 p-3 " to={"/"}>
          
          Go To Home Page
        </Link>
      </div>
    </>
  );
}
