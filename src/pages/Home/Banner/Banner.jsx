import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21 , 21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Service
            </h2>
            <p>
              There Are Many Variations Of Passages Of Availble , But The
              Majority Have Suffered Alteration In Form
            </p>
            <div>
              <button className="btn btn-active btn-primary mr-4">
                Discover More..
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 justify-end flex -translate-y-1/2 transform ">
          <a href="#slide4" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-lg" />

        <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21 , 21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Service
            </h2>
            <p>
              There Are Many Variations Of Passages Of Availble , But The
              Majority Have Suffered Alteration In Form
            </p>
            <div>
              <button className="btn btn-active btn-primary mr-4">
                Discover More..
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-5 right-5 bottom-0 justify-end flex -translate-y-1/2 transform ">
          <a href="#slide1" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-lg" />

        <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21 , 21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Service
            </h2>
            <p>
              There Are Many Variations Of Passages Of Availble , But The
              Majority Have Suffered Alteration In Form
            </p>
            <div>
              <button className="btn btn-active btn-primary mr-4">
                Discover More..
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-5 right-5 bottom-0 justify-end flex -translate-y-1/2 transform ">
          <a href="#slide2" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-lg" />

        <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21 , 21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Service
            </h2>
            <p>
              There Are Many Variations Of Passages Of Availble , But The
              Majority Have Suffered Alteration In Form
            </p>
            <div>
              <button className="btn btn-active btn-primary mr-4">
                Discover More..
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-5 right-5 bottom-0 justify-end flex -translate-y-1/2 transform ">
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
