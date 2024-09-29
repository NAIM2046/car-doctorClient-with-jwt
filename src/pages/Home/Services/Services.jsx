import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-3xl text-orange-500 font-bold">Our Service </h1>
        <h1 className="text-4xl">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form , by injected
          humour , or randomised <br></br> word which do not look even sigthy
          believable
        </p>
      </div>
      <div className=" mt-4 mb-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
