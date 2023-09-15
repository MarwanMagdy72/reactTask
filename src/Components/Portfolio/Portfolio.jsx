import React, { useState } from "react";
import img1 from "../../assets/port1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import Swal from "sweetalert2";
export default function Portfolio() {
  const [images, setImages] = useState([img1, img2, img3]);
  const [ open , close] = useState();

  function popUpImg(image) {
    Swal.fire({
      
      color: '#716add',
      background:` none `,
      backdrop: `
        rgba(0,0,123,0.4)
        url(${image})
        center center
        no-repeat
     `,
     showConfirmButton: false
    })
  }

  return (
    <>
      <div className="container w-75">
        {Array(2)
          .fill()
          .map((_, rowIndex) => (
            <div className="row m-4" key={rowIndex}>
              {images.map((image, index) => (
                <div
                  className="col-lg-4 "
                  key={index}
                  onClick={() => popUpImg(image)}
                >
                  <div className="img-container position-relative  ">
                    <img
                      src={image}
                      alt={`img${index + 1}`}
                      className="w-100  rounded-4"
                    />
                    <div className="layer rounded-4 ">
                      <i className="fa-solid fa-plus port-icon"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
    
      </div>

    </>
  );
}
