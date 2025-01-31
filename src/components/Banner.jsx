import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url("src/assets/1.jpg")` }}
    >
      <div className="text-white text-2xl w-full text-center bg-black-900/60 p-4">
        Kraven The Hunter
      </div>
    </div>
  );
};

export default Banner;
