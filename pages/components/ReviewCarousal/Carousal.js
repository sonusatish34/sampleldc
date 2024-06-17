
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person from '../../images/per.jpeg';
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Carousal() {

  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   pauseOnHover: true,
  //   pauseOnFocus: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className="slider-container">
      <Slider {...settings}>
        <div className="">
          {/* <div className="rounded-full">Helllooo</div> */}
          



          {/* <Rating value={5} readOnly cancel={false} /> */}

          <Image
            src={person}
            alt="Person"
            // layout="fill"
            // objectFit="cover"
            width={150}
            className="h-20 mx-auto object-cover rounded-full w-20"
          />
          <div className="flex justify-center">
            <AiFillStar
              className='star'
              color={"#ffc107"}
              size={25}
            />
            <AiFillStar
              className='star'
              color={"#ffc107"}
              size={25} />
            <AiFillStar
              className='star'
              color={"#ffc107"}
              size={25} />
            <AiFillStar
              className='star'
              color={"#ffc107"}
              size={25} />
            <AiFillStar
              className='star'
              color={"#ffc107"}
              size={25} />
          </div>
          <h2 className="p-1">Harish Kumar</h2>
          <p className="p-2">
            Booked a XUV with unlimited kms, very happy with longdrivecar's service
          </p>
        </div>
        <div className="">
          {/* <div className="rounded-full">Helllooo</div> */}
          <Image
            src={person}
            alt="Person"
            // layout="fill"
            // objectFit="cover"
            width={150}
            className="h-20 mx-auto object-cover rounded-full w-20"
          />
          <h2 className="p-1">Harish Kumar</h2>
          <p className="p-2">
            Booked a XUV with unlimited kms, very happy with longdrivecar's service
          </p>
        </div>
        <div className="">
          {/* <div className="rounded-full">Helllooo</div> */}
          <Image
            src={person}
            alt="Person"
            // layout="fill"
            // objectFit="cover"
            width={150}
            className="h-20 mx-auto object-cover rounded-full w-20"
          />
          <h2 className="p-1">Harish Kumar</h2>
          <p className="p-2">
            Booked a XUV with unlimited kms, very happy with longdrivecar's service
          </p>
        </div>

      </Slider>
    </div>
  );
}