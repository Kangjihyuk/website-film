import React from "react";

const NewsLetter = ({ title, button }) => {
  return (
    <div className="container mt-20 flex flex-col items-center lg:mt-32">
      <h1 className="poppins-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
        {title}
      </h1>
      <div className="mt-5 lg:mt-10">
        <input
          type="text"
          name="text"
          placeholder="Enter Your Email Here."
          className="px-7 py-2 rounded-l-xl shadow-[0_0_10px_0_rgba(0,0,0,0.1)] sm:pr-20 md:pr-32 md:py-5 lg:pr-40 "
        />
        <button className="btn-primary bg-primary px-7 py-2 rounded-r-xl text-white md:py-5 hover:scale-95 transition-all duration-300 hover:text-lg lg:px-10">
          {button}
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
