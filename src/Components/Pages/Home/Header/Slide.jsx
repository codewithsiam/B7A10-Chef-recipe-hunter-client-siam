import React from "react";

const Slide = ({ slide }) => {
  const { name, thumbnail, details } = slide;

  return (
    <div className="relative overflow-hidden rounded-lg">
      <img
        style={{height: "550px"}}
        className="w-full object-cover"
        src={thumbnail}
        alt="Image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center text-white">
          <h2 className="md:text-7xl text-2xl font-bold  text-shadow mb-10">{name}</h2>
            <p className="mx-auto md:text-lg w-4/6">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;