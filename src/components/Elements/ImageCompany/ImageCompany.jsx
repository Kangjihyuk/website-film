import React from "react";

const ImageCompany = ({ image, alt }) => {
  return (
    <div>
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className=" grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
      />
    </div>
  );
};

export default ImageCompany;
