import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen p-4">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 mb-4 relative">
          <img src={person} className="max-w-sm rounded-lg shadow-2xl w-3/4 " />
          <img
            src={parts}
            className="max-w-sm rounded-lg shadow-2xl w-1/2 absolute right-5 top-1/2 border-8 border-white"
          />
        </div>

        <div className="lg:w-1/2 space-y-4 ">
          <h2 className="text-3xl text-orange-500"> About Us</h2>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
