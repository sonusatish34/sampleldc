import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import person from '../../images/per.jpeg';
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

export default function Carousal() {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="flex justify-center">
      <div className="slider-container ml-11 mr-6 w-52">
        <Slider {...settings}>
          
          <div className="p-1">
            <div className="flex items-center">
              
              <div className="ml-2">
                <h2 className="text-sm">Harish Kumar</h2>
                
              </div>
            </div>
            <p className="text-xs">
              Booked a XUV with unlimited kms, very happy with longdrivecar's service
            </p>
          </div>
          <div className="p-1">
            
            <p className="text-xs">
              Booked a XUV with unlimited kms, very happy with longdrivecar's service
            </p>
          </div>
          <div className="p-1">
           
            <p className="text-xs">
              Booked a XUV with unlimited kms, very happy with longdrivecar's service
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
