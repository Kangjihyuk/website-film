import { Fragment } from "react";

const ImagesPerson = (props) => {
  const { image, alt, children } = props;
  return (
    <Fragment>
      <div className="flex items-center justify-center bg-white p-1 shadow-lg rounded-sm">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={`w-10 h-10 rounded-full object-cover`}
        />
        {children}
      </div>
    </Fragment>
  );
};

export default ImagesPerson;
